import { Entity, PrimaryGeneratedColumn,Column ,ManyToOne,OneToMany,BaseEntity, OneToOne,JoinColumn} from 'typeorm';
import { IsDefined, IsNotEmpty ,IsMobilePhone,IsEmail} from 'class-validator'
import PublicUserWallet from './publicUserWallet'


@Entity()
export default class Category extends BaseEntity{
    
    @PrimaryGeneratedColumn()
    id!: number;
    
    @Column()
    title!: string;
    
    @Column()
    text!: string;
    
    //many child belongs to one parents
    @ManyToOne(type => Category, category => category.childs)
    parent!: Category;
    

    // one parents have to many childs 
    @OneToMany(() => Category, category => category.parent)
    childs!: Category[];
    
}