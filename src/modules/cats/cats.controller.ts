import { Controller, Delete, Get, Post } from '@nestjs/common'
import { CatsInterface, CatTalkInterface } from './cats.interface'

@Controller('cats')
export class CatsController {

  @Get()
  async findAllCats(): Promise<CatsInterface[]> {
    return []
  }

  @Get(':id')
  async getCat(): Promise<CatsInterface> {
    return null
  }
  @Get('talks')
  async getCatTalkMessages(): Promise<CatTalkInterface[]> {
    return []
  }

  @Post()
  async createCat(): Promise<CatsInterface> {
    return null
  }

  @Delete(':id')
  async removeCat(): Promise<string> {
    let id
    return `remove cat ${id} complete`
  }

}
