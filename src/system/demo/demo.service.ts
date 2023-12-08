import { Injectable } from '@nestjs/common';
import { UpdateDemoDto } from './dto/update-demo.dto';
import { DemoEntity } from './entities/demo.entity';

@Injectable()
export class DemoService {
    create() {
        const entity = new DemoEntity();
        entity.age = 10;
        entity.nick_name = '小牛';
        entity.user_id = '9529';
        return entity;
    }

    findAll() {
        return `This action returns all demo`;
    }

    findOne(id: number) {
        return `This action returns a #${id} demo`;
    }

    update(id: number, updateDemoDto: UpdateDemoDto) {
        return `This action updates a #${id} demo`;
    }

    remove(id: number) {
        return `This action removes a #${id} demo`;
    }
}
