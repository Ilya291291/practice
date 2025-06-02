import { useState } from "react"
import { useWindowEvent } from "./useWindowEvent"

export const useViewportSize = () => {
    const [width, setWidth] = useState<number | null>(window.innerHeight)
    const [height, setHeight] = useState<number | null>(window.innerHeight)

    useWindowEvent('resize', () => {
        setHeight(window.innerHeight)
        setWidth(window.innerWidth)
    })
    return {
        width,
        height
    }
}