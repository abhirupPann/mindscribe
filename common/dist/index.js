"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signinPostSchema = exports.signupPostSchema = exports.blogPutSchema = exports.blogPostSchema = void 0;
const zod_1 = require("zod");
exports.blogPostSchema = zod_1.z.object({
    "title": zod_1.z.string(),
    "content": zod_1.z.string(),
    "published": zod_1.z.boolean(),
});
exports.blogPutSchema = zod_1.z.object({
    "id": zod_1.z.string(),
    "title": zod_1.z.string(),
    "content": zod_1.z.string(),
});
exports.signupPostSchema = zod_1.z.object({
    "email": zod_1.z.string().email(),
    "password": zod_1.z.string().min(4),
    "name": zod_1.z.string().optional()
});
exports.signinPostSchema = zod_1.z.object({
    "email": zod_1.z.string().email(),
    "password": zod_1.z.string().min(4),
});
