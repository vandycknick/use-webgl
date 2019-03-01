import React, { useEffect, useRef, useState } from "react"

type UseWebGLOptions = {
    width: number,
    height: number,

    onInit: (GL: WebGLRenderingContext | null, canvas: HTMLCanvasElement) => void
    onExit?: () => void
    onResize?: (width: number, height: number) => void
}

const useWebGL = (options: UseWebGLOptions) => {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const [width, setWidth] = useState(options.width)
    const [height, setHeight] = useState(options.height)

    useEffect(() => {
        if (options.onInit) {
            const canvas = canvasRef.current as HTMLCanvasElement
            const GL = canvas.getContext("webgl")

            options.onInit(GL, canvas)
        }

        return () => options.onExit && options.onExit()

    }, [canvasRef])

    const resizeCanvas = (newWidth: number, newHeight: number) => {
        setWidth(newWidth)
        setHeight(newHeight)
        if (options.onResize) options.onResize(newWidth, newHeight)
    }

    return [<canvas ref={canvasRef} width={width} height={height} />, resizeCanvas]
}

export default useWebGL
