import {describe, it, expect} from 'bun:test';
describe('Web API', () => {
    it('should support fetch', async () => {
        const response = await fetch('https://example.com');
        expect(response.status).toBe(200);
        expect(response.headers.get('Content-Type')).toBe('text/html; charset=UTF-8');
        expect(await response.text()).toContain('Example Domain');
    })
})