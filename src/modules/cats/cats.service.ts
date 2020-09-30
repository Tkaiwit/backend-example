import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'

import { Cat } from './cats.model';

@Injectable()
export class CatsService {
    constructor(@InjectModel('Cat') private readonly catModel: Model<Cat>) { }

    async insertCat(title: string, avatar: string, sounds: string) {
        const newCat = new this.catModel({
            title,
            avatar,
            sounds,
        });
        const result = await newCat.save();
        return result.id as string;
    }

    async getCats() {
        const cats = await this.catModel.find().exec();
        return cats.map(prod => ({
            id: prod.id,
            title: prod.title,
            avatar: prod.avatar,
            sounds: prod.sounds,
        }));
    }

    async getSingleCat(catId: string) {
        const cat = await this.findCat(catId);
        return {
            id: cat.id,
            title: cat.title,
            avatar: cat.avatar,
            sounds: cat.sounds,
        };
    }

    async updateCat(
        catId: string,
        title: string,
        avatar: string,
        sounds: string,
    ) {
        const updatedCat = await this.findCat(catId);
        if (title) {
            updatedCat.title = title;
        }
        if (avatar) {
            updatedCat.avatar = avatar;
        }
        if (sounds) {
            updatedCat.sounds = sounds;
        }
        updatedCat.save();
    }

    async deleteCat(catId: string) {
        const result = await this.catModel.deleteOne({ _id: catId }).exec();
        if (result.n === 0) {
            throw new NotFoundException('Could not find product.');
        }
    }

    private async findCat(Id: string): Promise<Cat> {
        let cat;
        try {
            cat = await this.catModel.findById(Id).exec();
        } catch (error) {
            throw new NotFoundException('Could not find product.');
        }
        if (!cat) {
            throw new NotFoundException('Could not find product.');
        }
        return cat;
    }

}
