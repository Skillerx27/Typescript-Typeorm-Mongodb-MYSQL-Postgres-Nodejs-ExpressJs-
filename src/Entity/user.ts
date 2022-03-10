import { Entity, PrimaryGeneratedColumn,Column ,BaseEntity, OneToOne, OneToMany} from 'typeorm';
import { IsDefined, IsNotEmpty ,IsMobilePhone,IsEmail} from 'class-validator'
import PublicUserWallet from './publicUserWallet'
import PublicPrivateWalletRelation from './publicPrivateWalletRelation'


@Entity()
export default class User extends BaseEntity {
	@PrimaryGeneratedColumn()
    id!: number;

    @Column({name: "firstName",type: "varchar", length: 30})
    @IsDefined()
    @IsNotEmpty()
    firstName!: string;

    @Column({name: "lastName",type: "varchar", length: 30})
    @IsDefined()
    @IsNotEmpty()
    lastName!: string;

    @Column({name: "phone",type: "varchar", length: 30})
    @IsDefined()
    @IsMobilePhone()
    @IsNotEmpty()
    phone!: string;

    @Column({name: "email",type: "varchar", length: 30})
    @IsDefined()
    @IsEmail()
    @IsNotEmpty()
    email!: string;

    @Column({name: "location",type: "varchar", length: 30})
    @IsDefined()
    @IsNotEmpty()
    location!: string;

    @Column({name: "password",type: "varchar", length: 30})
    password!: string;

    @Column("simple-json",{ nullable: true})
    avatar!: {url:string , alt:string};

    @OneToOne(() => PublicUserWallet,publicUserWallet=>publicUserWallet.user)
    publicUserWallet!: PublicUserWallet 


    @OneToMany(()=>PublicPrivateWalletRelation,publicPrivateWalletRelation =>publicPrivateWalletRelation.userWallet)
    privateWallet!: PublicPrivateWalletRelation
    
}