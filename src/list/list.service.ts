import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateListDto } from './dto/create-list.dto';
import { UpdateListDto } from './dto/update-list.dto';
import { List } from './entities/list.entity';


@Injectable()
export class ListService {
  constructor(
    @InjectRepository(List)
    private readonly listRepository: Repository<List>,
  ) {}

  async create(createListDto: CreateListDto): Promise<List> {
    const newList = this.listRepository.create(createListDto);
    // Save the new entity to the database
    return this.listRepository.save(newList);
  }

  findAll() {
    const list = this.listRepository.find();
    return list; 
  
  }

  findOne(result: string,qualify:string): Promise<List> {
    const list = this.listRepository.findOneBy({result:result,qualify:qualify});
    return list; 
  }

  update(id: number, updateListDto: UpdateListDto) {
    return `This action updates a #${id} list`;
  }

  remove(id: number) {
    return `This action removes a #${id} list`;
  }
}
