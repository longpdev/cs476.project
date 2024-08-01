import { EventEmitter } from 'events';

class Notifier extends EventEmitter {
  constructor() {
    super();
  }

  addObserver(observer: (message: any) => void) {
    this.on('newApplication', observer);
  }

  removeObserver(observer: (message: any) => void) {
    this.off('newApplication', observer);
  }

  notifyObservers(message: any) {
    this.emit('newApplication', message);
  }
}

export default new Notifier();
