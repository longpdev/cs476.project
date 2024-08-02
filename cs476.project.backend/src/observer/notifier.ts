import { EventEmitter } from 'events';

class Notifier extends EventEmitter {
  constructor() {
    super();
  }

  addObserver(observer: (message: any) => void) {
    this.on('', observer);
  }

  removeObserver(observer: (message: any) => void) {
    this.off('', observer);
  }

  notifyObservers(message: any) {
    this.emit('', message);
  }
}

export default new Notifier();
