import { Router } from 'express';
import validator from '../validator/register.validation'
import validationMiddleware from '../middlewares/validation.middleware'

import { createUser,findAuthorBook, createPDF,createPost,qbfindUser,createBook, createAuthorBookRelation, createAuthor, createPublicWallet, createPrivateUserWallet, findPublicUserWallet , findPublicPrivateUserWallet,findCategory} from '../controllers/todos';

const router = Router();
router.get('/test',(req,res)=>{
    res.status(200).send("backend server is running")
  })
router.post('/createPost', createPost)
router.post('/userCreate',validationMiddleware(validator.create), createUser)
router.post('/public/walletCreate',validationMiddleware(validator.publicWallet), createPublicWallet)
router.post('/private/walletCreate',validationMiddleware(validator.privateWallet), createPrivateUserWallet)
router.get('/findPublicUserWallet', findPublicUserWallet)
router.get('/findPublicPrivateUserWallet', findPublicPrivateUserWallet)
router.get('/selftRef', findCategory)
router.get('/qbfindUser', qbfindUser)
router.post('/createAuthor', createAuthor)
router.post('/createBook', createBook)
router.post('/createAuthBookRelation', createAuthorBookRelation)
router.get('/findAuthorBook', findAuthorBook)
router.get('/createPDF', createPDF)

// router.get('/', getTodos);

// router.patch('/:id', updateTodo);

// router.delete('/:id', deleteTodo);

export default router;