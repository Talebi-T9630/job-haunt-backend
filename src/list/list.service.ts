import { Injectable,NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, In } from 'typeorm';
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
    return this.listRepository.save(newList);
  }

 async findAll(search?: string) {
    let list;
    if(search){
       list = this.listRepository.find({
        where: [
            { result: search },
            { qualify: search},
        ],
    })

    }else{
      list = this.listRepository.find();
    }
    return await list; 
   }


  findOne(id: number) {
    return `This action returns a #${id} list`;
  }

  async update(id: number, updateListDto: UpdateListDto) : Promise<List> {
        const list = await this.listRepository.findOneBy({ id });
        if (!list) {
                throw new NotFoundException(`List with ID ${id} not found`);
                }else if(list.deleted===true){
                  throw new Error(`List with ID ${id} has been deleted`);

                }else{
                  Object.assign(list, updateListDto);

                }
          return this.listRepository.save(list);
    }

 async remove(ids: number[]) {
   await this.listRepository.update(
    {id: In(ids)},
    {deleted:true}
   );
    return `This action removed a #${ids} list`;
  }
}
