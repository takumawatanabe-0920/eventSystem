import eventMap, { Handler } from './eventMap'

const hogehogeSubscription = [
  {
    key: 'slack',
    callback: async (event: Handler['hogehoge']) => {
      console.log('slack', event)
    },
  },
  {
    key: 'email',
    callback: async (event: Handler['hogehoge']) => {
      console.log('email', event)
    },
  },
]

const fugafugaSubscription = [
  {
    key: 'slack',
    callback: async (event: Handler['fugafuga']) => {
      console.log('slack', event)
    },
  },
  {
    key: 'email',
    callback: async (event: Handler['fugafuga']) => {
      console.log('email', event)
    },
  },
]

export { hogehogeSubscription, fugafugaSubscription }
