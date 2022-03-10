import { Entity, PrimaryGeneratedColumn,Column, BaseEntity,OneToOne, JoinColumn} from 'typeorm';
import { IsDefined, IsNotEmpty ,IsMobilePhone,IsEmail} from 'class-validator'
import User from './user'
@Entity()
export default class PublicUserWallet extends BaseEntity{
	@PrimaryGeneratedColumn()
    id!: number;

    @Column({name: "userId",type: "int", width: 8})
    @IsDefined()
    @IsNotEmpty()
    userId!: number;

    @Column({name: "publicKey",type: "varchar", length: 200})
    @IsDefined()
    @IsNotEmpty()
    publicKey!: string;

    @Column({name: "privateKey",type: "varchar", length: 200})
    @IsDefined()
    @IsNotEmpty()
    privateKey!: string;

    @OneToOne(() => User,user=>user.publicUserWallet)
    @JoinColumn()
    user!: User 
}