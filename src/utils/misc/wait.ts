import {Config} from '../../setup'

export function wait(config: Config) {
  const delay = config.delay
  if (typeof delay !== 'number') {
    return
  }
  return Promise.all([
    new Promise<void>(resolve => globalThis.setTimeout(() => resolve(), delay)),
    config.advanceTimers(delay),
  ])
}
