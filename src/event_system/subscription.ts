import eventMap, { Handler } from './eventMap'

const hogehogeSubscription = [
  {
    key: 'slack',
    callback: (event: Handler['hogehoge']) => {
      console.log('slack', event)
    },
  },
  {
    key: 'email',
    callback: (event: Handler['hogehoge']) => {
      console.log('email', event)
    },
  },
]

const fugafugaSubscription = [
  {
    key: 'slack',
    callback: (event: Handler['fugafuga']) => {
      console.log('slack', event)
    },
  },
  {
    key: 'email',
    callback: (event: Handler['fugafuga']) => {
      console.log('email', event)
    },
  },
]

export { hogehogeSubscription, fugafugaSubscription }
