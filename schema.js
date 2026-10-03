const Joi = require('joi');

const listingSchema = Joi.object({
    listing: Joi.object({
    name: Joi.string().required(),
    category: Joi.string(),
    quantity: Joi.number().min(0),
    unitPrice: Joi.number().required().min(0),
    supplier: Joi.string(),
    createdAt: Joi.date().default(Date.now),
    updatedAt: Joi.date().default(Date.now),
    }).required(),
});

const reviewSchema = Joi.object({
    review: Joi.object({
        rating: Joi.number().required().min(1).max(5),
        comment : Joi.string().required()
    }).required()
})
module.exports = {
    listingSchema, 
    reviewSchema
};