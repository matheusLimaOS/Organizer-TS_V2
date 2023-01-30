import joi from 'joi';
import { Rating } from '../protocols';

export const insertRatingSchema = joi.object<Rating>({
    comment: joi.string().max(250),
    movieId: joi.number().required(),
    rating: joi.number().max(5).required(),
    userId: joi.number().required()
})