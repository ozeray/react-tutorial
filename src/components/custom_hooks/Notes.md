# Custom Hooks

You can use them to extract and reuse logic that involves state or side effects, making your components more readable and maintainable. They should start with **use** keyword (e.g. `useForm`, `useFetch`, etc.), and can call other hooks withing them.

## Example

Combine `useState` and `useRef` inside a custom hook in a JS file, export it and and reuse it again and again.
