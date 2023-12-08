import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateDemoDto {
    @ApiProperty({ type: 'string', example: '用户昵称' })
    @IsNotEmpty({ message: '昵称不能为空' })
    readonly nick_name: string;

    @ApiProperty({ type: 'number', example: 18 })
    readonly age: number;

    @ApiProperty({ type: 'string', example: '用户id' })
    readonly user_id: string;
}
