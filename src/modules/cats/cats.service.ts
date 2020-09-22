import { Injectable } from '@nestjs/common'
import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose'
import { CatsInterface } from './cats.interface'
import { CreateCatsDTO } from './dto/create-cats.dto'

@Injectable()
export class CatsService {
   constructor(@InjectModel('Cat') private readonly catModel: Model<CatsInterface>){}

   async getCats(): Promise<CatsInterface[]> {
       const cats = await this.catModel.find().exec();
       return cats;
   }

   async getbyIdCat(catID: string): Promise<CatsInterface> {
        const fetchedCat = await this.catModel
            .findById(catID)
            .exec();
        return fetchedCat;
   }

   async addCat(createCatsDTO: CreateCatsDTO): Promise<CatsInterface> {
    const addedCat = await new this.catModel(createCatsDTO);
    return addedCat.save();
   }

   async updateCat(catID:string, createCatsDTO: CreateCatsDTO): Promise<CatsInterface> {
    const updatedCat = await this.catModel.findByIdAndUpdate(catID, createCatsDTO, {new: true});
    return updatedCat;
   }

   async deleteCat(catID:string): Promise<CatsInterface> {
    const deletedCat = await this.catModel.findByIdAndRemove(catID);
    return deletedCat;
   }
}
