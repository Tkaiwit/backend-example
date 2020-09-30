/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Controller, Delete, Get, Post, Body, Param, Put } from '@nestjs/common'
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {

  constructor(private readonly catsSvc: CatsService) { }

  @Post()
  async addCat(
    @Body('title') prodTitle: string,
    @Body('avatar') prodAvatar: string,
    @Body('sounds') prodSounds: string,
  ) {
    const generatedId = await this.catsSvc.insertCat(
      prodTitle,
      prodAvatar,
      prodSounds,
    );
    return { id: generatedId };
  }

  @Get()
  async getAllCats() {
    const cats = await this.catsSvc.getCats();
    return cats;
  }

  @Get(':id')
  getCat(@Param('id') prodId: string) {
    return this.catsSvc.getSingleCat(prodId);
  }

  @Put(':id')
  async updateCat(
    @Param('id') prodId: string,
    @Body('title') prodTitle: string,
    @Body('avatar') prodAvatar: string,
    @Body('sounds') prodSounds: string,
  ) {
    await this.catsSvc.updateCat(prodId, prodTitle, prodAvatar, prodSounds);
    return null;
  }

  @Delete(':id')
  async removeCat(@Param('id') prodId: string) {
    await this.catsSvc.deleteCat(prodId);
    return null;
  }

  // @Get('talks')
  // async getCatTalkMessages(): Promise<CatTalkInterface[]> {
  //   return []
  // }
}
