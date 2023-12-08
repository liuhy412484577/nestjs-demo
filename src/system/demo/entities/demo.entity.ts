import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user_db')
export class DemoEntity {
    @PrimaryGeneratedColumn('uuid')
    user_id: string;

    @Column({ type: 'varchar', length: 20, default: '', comment: '昵称' })
    nick_name: string;

    @Column({ type: 'int', default: 0, comment: '年龄' })
    age: number;
}
