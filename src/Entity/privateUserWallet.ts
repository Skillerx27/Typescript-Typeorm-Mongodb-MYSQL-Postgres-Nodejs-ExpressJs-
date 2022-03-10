import { Entity, PrimaryGeneratedColumn,Column,BaseEntity } from 'typeorm';
import { IsDefined, IsNotEmpty ,IsMobilePhone,IsEmail} from 'class-validator'

@Entity()
export default class PrivateUserWallet extends BaseEntity {
	@PrimaryGeneratedColumn()
    id!: number;

    @Column({name: "publicKey",type: "varchar", length: 200})
    @IsDefined()
    @IsNotEmpty()
    publicKey!: string;

    @Column({name: "privateKey",type: "varchar", length: 200})
    @IsDefined()
    @IsNotEmpty()
    privateKey!: string;
   
}