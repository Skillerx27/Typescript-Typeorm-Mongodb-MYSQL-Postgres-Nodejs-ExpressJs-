import { Entity,ObjectID, ObjectIdColumn,Column ,BaseEntity, OneToOne, OneToMany, ManyToOne, JoinColumn} from 'typeorm';
import { IsDefined, IsNotEmpty ,IsMobilePhone,IsEmail} from 'class-validator'
import Author from '../MEntity/author'


@Entity()
export default class Book extends BaseEntity{
    @ObjectIdColumn()
    id!: ObjectID;

    @ObjectIdColumn()
    authorId!: ObjectID;

    @Column()
    name!: string;

    @Column()
    image!: string;

    @ManyToOne(() => Author, author => author.book)
    author! : Author
} 
