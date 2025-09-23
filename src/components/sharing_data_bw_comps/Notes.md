# Sharing Data Between Components

## Props drilling

Passing data to child components via props of each component along the hierarchy.  
Definitely, not a nice solution!

## Context API

Used to share state between components without passing it through props.  
Especially useful when the components are deeply nested.

### Method 1: Data provider (createContext) & consumer tags

Using `createContext` from `'react'` you set a data context in the parent component. Then you publish this data context using `Data.Provider` tags (with `value` attribute set to desired data to be shared). Then you access the data inside any nested component using `Data.Consumer` tags.  
Although it is better than props drilling, this method leads to verbose coding, especially if there are multiple data to share.

### Method 2: useContext hook

Consume the provided data using `useContext(Data)` call, and use it anywhere. Best way to consume data.
