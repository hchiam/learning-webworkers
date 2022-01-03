import * as Comlink from "comlink";

export default class MyWebWorker {
  constructor() {
    this.counter = 0;
  }
  increment() {
    this.counter++;
    return this.counter;
  }
}

Comlink.expose(MyWebWorker);
