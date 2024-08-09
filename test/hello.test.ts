import {describe, it, expect} from 'bun:test';
import { sayHello } from '../src/hello';

describe('Bun Test Runner', () => {
    it('should support unit test', async () => {
        const response = sayHello('Fauzan');
        expect(response).toBe('Hello Fauzan');
    })
    
    it('should support unit test with budi', async () => {
        const response = sayHello('Budi');
        expect(response).toBe('Hello Budi');
    })
})