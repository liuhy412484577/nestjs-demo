import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}

    @Get(':id')
    getHello(@Param() params): string {
        console.debug('===id==', params.id);
        return this.appService.getHello();
    }
}
