import {describe, it, expect} from 'bun:test';
import { User } from '../packages/user/user.';

describe('User Package', () => {
    it('should accessed from main package', async () => {
        const user = new User("Fauzan");
        expect(user.name).toBe('Fauzan');
    })
})