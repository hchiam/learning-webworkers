importScripts("https://unpkg.com/comlink@alpha/dist/umd/comlink.js");

const object = {
  counter: 0,
  increment() {
    this.counter++;
  },
};

Comlink.expose(object);
