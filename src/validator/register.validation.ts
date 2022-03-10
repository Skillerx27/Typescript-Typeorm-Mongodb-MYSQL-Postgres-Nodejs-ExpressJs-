import Joi from 'joi';

const create = Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    password: Joi.string().required(),
    phone: Joi.string().required(),
    email: Joi.string().required(),
    location: Joi.string().required(),
    avatar: Joi.object().required(),
});

const publicWallet = Joi.object({
    userId: Joi.string().required(),
    publicKey: Joi.string().required(),
    privateKey: Joi.string().required(),
});

const privateWallet = Joi.object({
    userId: Joi.string().required(),
    userWalletId: Joi.string().required(),
    publicKey: Joi.string().required(),
    privateKey: Joi.string().required(),
});


export default { create, publicWallet,privateWallet };
