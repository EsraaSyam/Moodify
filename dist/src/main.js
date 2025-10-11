"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = handler;
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const platform_express_1 = require("@nestjs/platform-express");
const express_1 = __importDefault(require("express"));
const common_1 = require("@nestjs/common");
const http_exception_filter_1 = require("./common/http-exception.filter");
const server = (0, express_1.default)();
let appInitialized = false;
async function initApp() {
    if (appInitialized)
        return;
    const app = await core_1.NestFactory.create(app_module_1.AppModule, new platform_express_1.ExpressAdapter(server), {
        logger: false,
    });
    app.setGlobalPrefix('api/v1');
    app.useGlobalFilters(new http_exception_filter_1.HttpExceptionFilter());
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
        transformOptions: { enableImplicitConversion: true },
    }));
    app.enableCors();
    await app.init();
    appInitialized = true;
}
async function handler(req, res) {
    try {
        await initApp();
        server(req, res);
    }
    catch (err) {
        console.error('Vercel handler error:', err);
        res.status(500).send('Internal Server Error');
    }
}
//# sourceMappingURL=main.js.map