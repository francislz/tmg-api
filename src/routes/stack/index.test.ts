import 'reflect-metadata';
import express, { Express } from 'express';
import { setupApp } from "@utils/app";
import request from 'supertest';
import { container } from 'tsyringe';

describe('stack routes tests', () => {
  let app: Express;

  beforeEach(() => {
    app = setupApp(express());
    container.clearInstances();
  });

  describe('[POST] /v1/stack', () => {
    it('should add to stack when correct input is provided', async () => {
      await request(app)
        .post('/v1/stack')
        .send({ value: 'John Doe' })
        .accept('application/json')
        .expect(201)
        .expect({ message: 'Value added to stack' });
    });

    it('should return 400 when incorrect input is provided', async () => {
      await request(app)
        .post('/v1/stack')
        .send({})
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

  describe('[GET] /v1/stack', () => {
    it('should get value from stack when correct key is provided', async () => {
      await request(app).post('/v1/stack').send({ value: 'John Doe' });
      await request(app)
        .get('/v1/stack')
        .accept('application/json')
        .expect(200)
        .expect({ data: 'John Doe' });
    });

    it('should return 400 with empty data when invalid key is provided', async () => {
      await request(app)
        .get('/v1/stack')
        .accept('application/json')
        .expect(400)
        .expect({ message: 'Stack is empty' });
    });
  });
});
