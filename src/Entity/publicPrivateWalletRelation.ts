import { Entity, PrimaryGeneratedColumn,Column, ManyToOne, BaseEntity } from 'typeorm';
import { IsDefined, IsNotEmpty ,IsMobilePhone,IsEmail} from 'class-validator'

import User from './user'

@Entity()
export default class PublicPrivateWalletRelation extends BaseEntity {
	@PrimaryGeneratedColumn()
    id!: number;

    @Column({name: "userId",type: "int", width: 8})
    @IsDefined()
    @IsNotEmpty()
    userId!: number;
    
    @Column({name: "userWalletId",type: "int", width: 8})
    @IsDefined()
    @IsNotEmpty()
    userWalletId!: number;

    @Column({name: "userPrivateWalletId",type: "int", width: 8})
    @IsDefined()
    @IsNotEmpty()
    userPrivateWalletId!: number;

   
    @ManyToOne(() => User, user=>user.privateWallet)
    
    userWallet!: User
}