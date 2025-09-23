# Using useEffect Hook

In general, useEffect hook can be used to fetch data, update DOM, etc. during component initialization or state changes.

## No dependency array

If you don't provide dependency array in useEffect call, it will be fired on every single render of the component: `useEffect(()=>())`. This can be used if you really want to do something whenever the component is re-rendered for some reason.

## Empty dependency array

If you give an empty array for useEffect (`useEffect(()=>(),[])`), it will be fired only in component initialization stage, and not triggered upon changes. This can be used e.g. if you want to load some data during initial stage.

## Dependency array with specific states given

If you specify a state in the array, useEffect will be triggered whenever the given state changes (`useEffect(()=>(),[value])`). This is the most common usage.

## Using conditionals with useEffect

You cannot wrap your hook inside a conditional statement; you have to use conditional statement inside the useEffect hook if you need to.

~~`if(..) { useEffect(..) }`~~ => **WRONG**

`useEffect(..) (.. if.. ..)` => **CORRECT**
