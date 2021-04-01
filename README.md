# Learning WebWorkers (und comlink)

Just one of the things I'm learning. <https://github.com/hchiam/learning>

<https://www.youtube.com/watch?v=rZm1YaMZkUU>

<https://github.com/GoogleChromeLabs/comlink>

Note: Service Workers can modify network requests, but Web Workers can run expensive scripts without freezing the UI: <https://stackoverflow.com/a/38634315>

WebWorkers are available even in IE 10.

You can use WebWorkers to free up the main thread and UI, and help apps work faster on low-end devices.

And you can make WebWorkers easier to use from the main thread by using [`comlink`](https://github.com/GoogleChromeLabs/comlink) instead of trying to manage WebWorker messaging (since WebWorkers can't directly access things like the DOM).

## From scratch

Using [`yarn`](https://github.com/hchiam/learning-yarn):

```bash
npm init
yarn add comlink
yarn add parcel --dev
```

Or with `npm`:

```bash
npm init
npm install comlink
npm install parcel --save-dev
```

And then add files and create your JS code. For examples, see <https://github.com/GoogleChromeLabs/comlink>

```html
<script type="module">
  import * as Comlink from "https://unpkg.com/comlink@alpha/dist/esm/comlink.mjs";

  (async function () {
    const worker = new Worker("worker.js");
    const object = Comlink.wrap(worker);

    alert(`Counter: ${await object.counter}`);
    await object.increment();
    alert(`Counter: ${await object.counter}`);
  })();
</script>
```

```js
importScripts("https://unpkg.com/comlink@alpha/dist/umd/comlink.js");

const object = {
  counter: 0,
  increment() {
    this.counter++;
  },
};

Comlink.expose(object);
```

## Starting by testing out this repo

Using [`yarn`](https://github.com/hchiam/learning-yarn): (triple-click to select all)

```bash
git clone https://github.com/hchiam/learning-webworkers.git && cd learning-webworkers && yarn;
```

Or with `npm`: (triple-click to select all)

```bash
git clone https://github.com/hchiam/learning-webworkers.git && cd learning-webworkers && npm install;
```

And then:

```bash
parcel public/index.html
```

<http://localhost:1234>
