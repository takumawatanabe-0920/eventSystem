"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const eventMap_1 = require("./eventMap");
class EventSystem {
    constructor() {
        this.stack = [];
    }
    queue(eventType, args) {
        const event = { eventType, args };
        this.stack.push(event);
    }
    exec() {
        return __awaiter(this, void 0, void 0, function* () {
            while (this.stack.length > 0) {
                const event = this.enqueue();
                if (event) {
                    const subscriptions = eventMap_1.default[event.eventType];
                    for (const subscription of subscriptions) {
                        subscription.callback(event.args);
                    }
                }
            }
        });
    }
    enqueue() {
        return this.stack.shift();
    }
}
const eventSystem = new EventSystem();
exports.default = eventSystem;
//# sourceMappingURL=index.js.map