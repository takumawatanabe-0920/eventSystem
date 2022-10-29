import eventSystem from './event_system'

const main = async () => {
  eventSystem.queue('hogehoge', {
    args1: 'called args1',
    args2: 'called args2',
  })
  eventSystem.queue('fugafuga', {
    args3: 'called args3',
    args4: 'called args4',
  })
  await eventSystem.exec()
}

main()
