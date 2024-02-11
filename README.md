# CustUp React Library

<div align="center">
    <img src="https://github.com/paulosabayomi/CustUp/blob/master/_assets/custup.png" alt="Custup logo" width="200" style="object-fit: contain; justify-self:center;"/>
</div>

<!-- [START BADGES] -->
<!-- Please keep comment here to allow auto update -->
<p align="center">
  <a href="https://github.com/paulosabayomi/custup-react/blob/main/LICENSE"><img src="https://img.shields.io/github/license/paulosabayomi/CustUp?style=flat-square" alt="MIT License" /></a>
  <a href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript"><img src="https://img.shields.io/badge/logo-javascript-blue?logo=javascript" alt="Language" /></a>
  <a href="https://reactjs.dev"><img src="https://img.shields.io/badge/logo-reactjs-blue?logo=react" alt="React JS" /></a>
  <a href="https://github.com/paulosabayomi/custup-react/pulls"><img src="https://img.shields.io/badge/PRs-Welcome-brightgreen.svg?style=flat-square" alt="PRs Welcome" /></a>
  <a href="https://github.com/paulosabayomi/custup-react/actions/workflows/node.js.yml"><img src="https://github.com/paulosabayomi/custup-react/actions/workflows/node.js.yml/badge.svg" alt="Tests" /></a>
  <a href="https://github.com/paulosabayomi/custup-react/actions/workflows/npm-publish.yml"><img src="https://github.com/paulosabayomi/custup-react/actions/workflows/npm-publish.yml/badge.svg" alt="Publish to NPM" /></a>
  <a href="https://www.typescriptlang.org/"><img src="https://img.shields.io/badge/logo-typescript-blue?logo=typescript" alt="TypeScript" /></a>
</p>
<!-- [END BADGES] -->

The React JS version of CustUp, written in TypeScript

## Installation

```bash
npm i custup @custup/react
```

## Usage

Import it into your component like so

```jsx
// ...
import CustUp from "@custup/react"
// ...
```

Then import the `all.min.css` in your `index.js` or `index.tsx` file

```tsx
// ...
import "custup/src/all.min.css";
// ...
```

Then add CustUp component to where you want CustUp to be created

```jsx
// ExampleComponent.jsx

const ExampleComponent = React.memo((props) => {
    return (
        <div>
            <CustUp 
                id="first-example-instance" 
            />
        </div>
    )
})

```

Or if you're using TypeScript

```tsx
// ExampleComponent.tsx

const ExampleComponent = React.memo((props: any) => {
    return (
        <div>
            <CustUp 
                id="first-example-instance" 
            />
        </div>
    )
})

```

To use `ref` with CustUp, let's use the TypeScript `ExampleComponent.tsx` component

```tsx
// ExampleComponent.tsx

// ...
import { TCustUp } from "@custup/react";

const ExampleComponent = React.memo((props: any) => {
    const ref1 = React.useRef<TCustUp | undefined>()

    const exampleCustUpSubmit = React.useCallback(() => {
        ref1.current?.upload();
    }, [ref1.current])

    return (
        <div>
            <CustUp 
                ref={ref1}
                id="first-example-instance" 
            />

            <button onClick={exampleCustUpSubmit}>Upload</button>
        </div>
    )
})

```

And you can also have multiple CustUp components in the same component, only make sure the `id` props are not the same

```tsx
// ExampleComponent.tsx

// ...
import { TCustUp } from "@custup/react";

const ExampleComponent = React.memo((props: any) => {
    const ref1 = React.useRef<TCustUp | undefined>()
    const ref2 = React.useRef<TCustUp | undefined>()
    const ref3 = React.useRef<TCustUp | undefined>()

    const exampleCustUpSubmit = React.useCallback(() => {
        ref1.current?.upload();
    }, [ref1.current])

    return (
        <div>
            <CustUp 
                ref={ref1}
                id="first-example-instance" 
            />
            <CustUp 
                ref={ref2}
                id="second-example-instance" 
            />
            <CustUp 
                ref={ref3}
                id="third-example-instance" 
            />
        </div>
    )
})

```

You can use `ref` to subscribe to CustUp events

```tsx
// ExampleComponent.tsx

// ...
import { TCustUp } from "@custup/react";

const ExampleComponent = React.memo((props: any) => {
    const ref1 = React.useRef<TCustUp | undefined>()

    React.useLayoutEffect(() => {

        ref1.current?.on("file.afterAdded", (e) => {
            console.log("file was added", e)
        })

    }, [ref1.current])


    return (
        <div>
            <CustUp 
                ref={ref1}
                id="first-example-instance" 
            />
        </div>
    )
})

```

All CustUp options can be passed as props to the CustUp component, all [CustUp props can be see here](https://custup.pryxy.com/docs/category/options).

[Visit the Documentation website](https://custup.pryxy.com) to see the complete CustUp documentation and other cool things you can do with CustUp.
  
CustUp main [github repository](https://github.com/paulosabayomi/CustUp).
  
## License

[MIT License](https://github.com/paulosabayomi/custup-react/blob/main/LICENSE)
