import {z} from 'zod';

const loginValidation = z.object({
    username: z.string().min(1).max(50).email(),
    password: z.string().min(1).max(50),
});

const request = {
    username: 'fauzan@gmail.com',
    password: 'password'
}
loginValidation.parse(request)