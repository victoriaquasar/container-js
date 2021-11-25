# ContainerJS
An experiment with the objective of bringing rational objects using a solid abstraction to provide methods and attributes that follow a fixed pattern and increase the readability and coherence of the code.

## How it works?
ContainerJS is a library that implements a new JavaScript constructor, **Container**, among its functionalities its main use is to isolate an object in a solid abstraction, allowing safe and coherent operations to be performed with it and keeping it in its initial type, which prevents unwanted behaviors.

**Functional example #1**: if you have a generic Object and a Map, usually you will use different methods to change them, when you are using several different types it is common to also implement several methods that basically do the same thing, but have different names. With a container object it is possible to get around this and unify an operation:

```js
const ObjectContainer = Container.from({});
const MapContainer = Container.from(new Map());

/* Do exactly the same thing */
ObjectContainer.add("key", "value");
MapContainer.add("key", "value");
```

**Functional example #2**: Data removal is a weird issue for arrays and generic objects, it requires an operation to be done to generate a new value without the unwanted data and replace the initial value. With a container this operation is reduced to a simple **remove** with the identification of what you want to remove or a **removeByIndex** if you want to perform the operation directly on the target's position.