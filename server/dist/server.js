"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = __importDefault(require("ws"));
const server = new ws_1.default.Server({ port: 5050 });
server.on('connection', ws => {
    console.log('New client connected');
    ws.on("message", data => {
        console.log(`Client has sent ${data}`);
    });
    ws.on('close', () => {
        console.log('Client disconnected');
    });
});
console.log('SERVER');
//# sourceMappingURL=server.js.map