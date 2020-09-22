/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Controller, Delete, Get, Post, Body, HttpStatus, Param, Res, Query, NotFoundException, Put } from '@nestjs/common'
import { CatsInterface, CatTalkInterface } from './cats.interface'
import { CreateCatsDTO } from './dto/create-cats.dto'
import { CatsService } from './cats.service';
//import { ValidateObjectId } from '../shared/pipes/validate-object-id.pipe';

@Controller('cats')
export class CatsController {

  constructor(private readonly catsSvc: CatsService) { }

  @Get()
  async getCats(@Res() res) {
    const cats = await this.catsSvc.getCats();
    return res.status(HttpStatus.OK).json(cats);
  }

  @Get(':catID')
  async getbyIdCat(@Res() res, @Param('catID',) catID: string) {
    const lists = await this.catsSvc.getbyIdCat(catID);
    if (!lists) {
      throw new NotFoundException('Id does not exist!');
    }
    return res.status(HttpStatus.OK).json(lists);
  }


  @Post()
  async addCat(@Res() res, @Body() createCatsDTO: CreateCatsDTO) {
    const addedCats = await this.catsSvc.addCat(createCatsDTO);
    return res.status(HttpStatus.OK).json({
      message: 'Cat has been successfuly added!',
      cat: addedCats,
    });
  }

  @Put()
  async updateCat(
    @Res() res,
    @Query('catID') catID: string,
    @Body() createCatsDTO: CreateCatsDTO) {
    const updatedCat = await this.catsSvc.updateCat(catID, createCatsDTO);
    if (!updatedCat) {
      throw new NotFoundException('Cat does not exist!');
    }
    return res.status(HttpStatus.OK).json({
      message: 'Cat has been successfully updated!',
      cat: updatedCat,
    });
  }

  @Delete()
  async deleteCat(
    @Res() res,
    @Query('catID') catID: string) {
    const deletedCat = await this.catsSvc.deleteCat(catID);
    if (!deletedCat) {
      throw new NotFoundException('Cat Does not exist!');
    }
    return res.status(HttpStatus.OK).json({
      message: 'Cat has been successfully deleted!',
      cat: deletedCat,
    });
  }

  @Get('talks')
  async getCatTalkMessages(): Promise<CatTalkInterface[]> {
    return []
  }
}
