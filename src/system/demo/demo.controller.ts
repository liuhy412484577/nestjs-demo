import {
    Controller,
    Get,
    Body,
    Patch,
    Param,
    Delete,
    Inject,
} from '@nestjs/common';
import { DemoService } from './demo.service';
import { UpdateDemoDto } from './dto/update-demo.dto';
import { ApiOperation } from '@nestjs/swagger';

@Controller('demo')
export class DemoController {
    // 注入自定义provide
    constructor(
        @Inject('Demo') private readonly demoService: DemoService,
        @Inject('UserArray') private readonly userArray: string[],
        @Inject('Factory') private readonly factory: string,
    ) {}

    @ApiOperation({
        summary: '测试服务',
    })
    @Get('create')
    create() {
        return this.demoService.create();
    }

    @Get()
    findAll() {
        return this.demoService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.demoService.findOne(+id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateDemoDto: UpdateDemoDto) {
        return this.demoService.update(+id, updateDemoDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.demoService.remove(+id);
    }

    @Get('/test')
    test(): any {
        console.log('===test===');
        // return this.userArray;
        return this.factory;
    }
}
