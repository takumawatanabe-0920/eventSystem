import eventMap from './eventMap'
import { Handler } from './eventMap'

class EventSystem {
  private stack: {
    eventType: keyof typeof eventMap
    args: Handler[keyof typeof eventMap]
  }[] = []

  queue<T extends keyof typeof eventMap>(eventType: T, args: Handler[T]) {
    const event = { eventType, args }
    this.stack.push(event)
  }

  async exec() {
    while (this.stack.length > 0) {
      const event = this.enqueue()
      if (event) {
        const subscriptions = eventMap[event.eventType]
        for (const subscription of subscriptions) {
          subscription.callback(event.args as any)
        }
      }
    }
  }

  private enqueue() {
    return this.stack.shift()
  }
}

const eventSystem = new EventSystem()
export default eventSystem
