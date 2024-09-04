import { Controller, Get, Post, Body, Patch, Param, Delete,Query } from '@nestjs/common';
import { ListService } from './list.service';
import { CreateListDto } from './dto/create-list.dto';
import { UpdateListDto } from './dto/update-list.dto';

@Controller('list')
export class ListController {
  constructor(private readonly listService: ListService) {}

  @Post()
  create(@Body() createListDto: CreateListDto) {
    return this.listService.create(createListDto);
  }

  @Get()
  findAll(@Query('search') search?: string) {
    return this.listService.findAll(search);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.listService.findOne(+id);
  }

  @Patch('update')
  update(@Query('id') id: number, @Body() updateListDto: UpdateListDto) {
    return this.listService.update(+id, updateListDto);
  }

  @Delete()
   remove(@Query('ids') ids: string) {
    const idArray = ids.split(',').map(id => +id);
    return this.listService.remove(idArray);
  }
}
