import app from "../config/server.config";
import supertest from "supertest";
import { describe, expect, test } from '@jest/globals';
import dronModels from "../models/dron.models";
import { connectDb } from "../config/mongoose_connect";

describe('Test Dron Endpoint', () => {
    beforeAll(async () => {
    return connectDb().then(() => {console.log("Db is connect")}).catch((error) => {console.log("not connectin SB" , error)});
    });

    test('Test get all Dron', async () => {
        const repo = await supertest(app).get("/dron").send();
        expect(repo.body.listDrone).toBeInstanceOf(Array);
    });

    test('Test Post Dron', async () => {
        const repo = await supertest(app).post("/dron").send({
            "model": "Middleweight",
            "weight": 265,
            "baterry": 64,
            "state": "LOADING",
            "medicaments": ["medicam_1", "medicam_2"]
        });
        expect(repo.statusCode).toBe(200)
    });
});
