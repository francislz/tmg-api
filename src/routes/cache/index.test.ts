import 'reflect-metadata';
import express, { Express } from 'express';
import { setupApp } from "@utils/app";
import request from 'supertest';

describe('cache routes tests', () => {
  let app: Express;

  beforeEach(() => {
    app = setupApp(express());
  });

  describe('[POST] /v1/cache', () => {
    it('should add to cache when correct input is provided', async () => {
      await request(app)
        .post('/v1/cache')
        .send({ key: 'name', value: 'John Doe' })
        .accept('application/json')
        .expect(201)
        .expect({ message: 'Value added to cache' });
    });

    it('should return 400 when incorrect input is provided', async () => {
      await request(app)
        .post('/v1/cache')
        .send({ key: 'name' })
        .accept('application/json')
        .expect(400)
        .expect({ 
          statusCode: 400,
          error: "Bad Request",
          message: "Validation failed",
          validation: {
            body: {
              source: "body",
              keys: [
                "value"
              ],
              message: "\"value\" is required"
            }
          }
        });
    });
  });

  describe('[GET] /v1/cache/:key', () => {
    it('should get value from cache when correct key is provided', async () => {
      await request(app).post('/v1/cache').send({ key: 'name', value: 'John Doe' });
      await request(app)
        .get('/v1/cache/name')
        .accept('application/json')
        .expect(200)
        .expect({ data: 'John Doe' });
    });

    it('should return 200 with empty data when invalid key is provided', async () => {
      await request(app)
        .get('/v1/cache/unknown')
        .accept('application/json')
        .expect(200)
        .expect({ data: "" });
    });
  });

  describe('[DELETE] /v1/cache/:key', () => {
    it('should delete value from cache when correct key is provided', async () => {
      await request(app).post('/v1/cache').send({ key: 'name', value: 'John Doe' });
      await request(app)
        .delete('/v1/cache/name')
        .accept('application/json')
        .expect(200)
        .expect({ data: 'John Doe' });
    });

    it('should return 400 when invalid key is provided', async () => {
      await request(app)
        .delete('/v1/cache/unknown')
        .accept('application/json')
        .expect(400)
        .expect({ message: 'Key not found' });
    });
  });
});
