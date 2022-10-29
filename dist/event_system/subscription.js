"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fugafugaSubscription = exports.hogehogeSubscription = void 0;
const hogehogeSubscription = [
    {
        key: 'slack',
        callback: (event) => {
            console.log('slack', event);
        },
    },
    {
        key: 'email',
        callback: (event) => {
            console.log('email', event);
        },
    },
];
exports.hogehogeSubscription = hogehogeSubscription;
const fugafugaSubscription = [
    {
        key: 'slack',
        callback: (event) => {
            console.log('slack', event);
        },
    },
    {
        key: 'email',
        callback: (event) => {
            console.log('email', event);
        },
    },
];
exports.fugafugaSubscription = fugafugaSubscription;
//# sourceMappingURL=subscription.js.map