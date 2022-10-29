import { fugafugaSubscription, hogehogeSubscription } from './subscription'

const eventMap = {
  ['hogehoge']: hogehogeSubscription,
  ['fugafuga']: fugafugaSubscription,
} as const

export type Handler = {
  ['hogehoge']: {
    args1: string
    args2: string
  }
  ['fugafuga']: {
    args3: string
    args4: string
  }
}

export default eventMap
