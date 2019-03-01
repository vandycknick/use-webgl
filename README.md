# useWebGL
[React Hook](https://reactjs.org/docs/hooks-overview.html) to get access to a webgl context and manage canvas life cycle

## Installation

```sh
# Yarn
yarn add @nvd/use-webgl

# NPM
npm i --save @nvd/use-webgl
```

## Usage
> This utility depends on React Hooks which are available as of react version 16.8.0 and higher.

```tsx
import React from "react"
import { render } from "react-dom"
import {createStore} from "redux"
import { useWebGL } from "@nvd/use-webgl"

const App = () => {
    const [canvas, resizeCanvas] = useWebGL({ width: 250, height: 250 })

    return (
        <div> { canvas } </div>
    );
}

render(
    <App />,
    document.getElementById('root'),
)

```

## API

### useWebGL
> (options: UseWebGLOptions) =&#x3E; (JSX.Element | ((newWidth: number, newHeight: number) =&#x3E; void))[];

Create a canvas and provide access to a webgl context object.

```tsx

const App = () => {
    const [ canvas, resizeCanvas] = useWebGL({
        width: 100,
        height: 100,
        onInit,
        onResize,
        onExit
    })

    ...
}
```

### UseWebGLOptions
Configuration object given to `useWebGL` function. Width and height are passed to the canvas to set up the initial size. onInit, onExit and onResize function are life cycle hooks that are used to do set up, cleanup or update your view for those events. Only width, height and onInit are required

```ts
declare type UseWebGLOptions = {
    width: number;
    height: number;
    onInit: (GL: WebGLRenderingContext | null, canvas: HTMLCanvasElement) => void;
    onExit?: () => void;
    onResize?: (width: number, height: number) => void;
};
```

## License
MIT
