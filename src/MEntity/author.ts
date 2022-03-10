import { Entity,ObjectID,ObjectIdColumn,Column ,BaseEntity, OneToOne, OneToMany, JoinColumn} from 'typeorm';
import { IsDefined, IsNotEmpty ,IsMobilePhone,IsEmail} from 'class-validator'
import Book from '../MEntity/book'


@Entity()
export default class Author extends BaseEntity {
    @ObjectIdColumn()
    id!: ObjectID;

    @Column()
    name!: string;

    @Column()
    image!: string;

    @OneToMany(() => Book, book => book.author)
    book! : Book
}