importScripts("https://unpkg.com/comlink@4.3.1/dist/umd/comlink.js");

const object = {
  counter: 0,
  increment() {
    this.counter++;
  },
};

Comlink.expose(object);
