import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';
import { IsDefined, IsNotEmpty, IsMobilePhone, IsEmail } from 'class-validator';

@Entity()
export default class Post extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ name: 'userId', type: 'varchar', length: 200 })
    @IsDefined()
    @IsNotEmpty()
    userId!: string;

    @Column({ name: 'comment', type: 'varchar', length: 200 })
    @IsDefined()
    @IsNotEmpty()
    comment!: string;
}
