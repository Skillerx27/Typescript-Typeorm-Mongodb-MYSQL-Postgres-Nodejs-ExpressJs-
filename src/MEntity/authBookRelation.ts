import { Entity,ObjectID, ObjectIdColumn,Column ,BaseEntity, OneToOne, OneToMany} from 'typeorm';
import { IsDefined, IsNotEmpty ,IsMobilePhone,IsEmail} from 'class-validator'
import PublicUserWallet from '../Entity/publicUserWallet'
import PublicPrivateWalletRelation from '../Entity/publicPrivateWalletRelation'


@Entity()
export default class AuthorBookRelation {
    @ObjectIdColumn()
    id!: ObjectID;

    @ObjectIdColumn()
    authorId!: ObjectID;
    
    @ObjectIdColumn()
    bookId!: ObjectID;
}