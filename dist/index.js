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
const event_system_1 = require("./event_system");
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    event_system_1.default.queue('hogehoge', {
        args1: 'called args1',
        args2: 'called args2',
    });
    event_system_1.default.queue('fugafuga', {
        args3: 'called args3',
        args4: 'called args4',
    });
    yield event_system_1.default.exec();
});
main();
//# sourceMappingURL=index.js.map