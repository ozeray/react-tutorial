# useRef Hook

`useRef` hook is used to access and interact with DOM elements or to persist values across renders without causing a re-render.

## Access & interact with DOM elements

You can use `ref` attribute of a component to assign that component to the referenced data (e.g. `const inputElement = useRef(null);` and `input .. ref={inputElement}..`). Later in the code, you can access that component using `inputElement.current`.

## Persist values

You can use useRef to persist a value, e.g. `const intervalRef = useRef(null);` and `intervalRef.current = setInterval(() => { ..`; then use that value to perform other operations, e.g. `clearInterval(intervalRef.current);`
