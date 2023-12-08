import { Controller, Get, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { DtoUser } from './constant';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}
    @Get(':id')
    userProfile(@Param() params): DtoUser {
        console.debug('==xx===', params.id);
        return this.userService.userProfile();
    }
}
