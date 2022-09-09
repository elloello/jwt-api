import request from 'supertest';
import { app } from '../app'

describe('GET /', () => {
    describe('There is authorization header', () => {
        test("status code: 200, protected: true", async () => {
            const response  = await request(app).get("/");
            expect(response.statusCode).toBe(200);
        });
    });

    describe('There is no authorization header', () => {
        test("status code: 401", async () => {
            const response  = await request(app).get("/");
            expect(response.statusCode).toBe(401);
        });
    });
});