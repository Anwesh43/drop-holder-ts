import {useEffect, useState, CSSProperties} from 'react'

const delay : number = 20 
const scGap : number = 0.02 

export const useAnimatedScale = () => {
    const [scale, setScale] = useState(0)
    const [animated, setAnimated] = useState(false)
    return {
        scale, 
        start() {
            if (!animated) {
                setAnimated(true)
                const interval  = setInterval(() => {
                    setScale((prev : number) => {
                        if (prev + scGap > 1) {
                            setAnimated(false)
                            clearInterval(interval)
                            return 0
                        }
                        return prev + scGap 
                    })
                }, delay)
            }
        }
    }
}

export const useDimension = () => {
    const [w, setW] = useState(window.innerWidth)
    const [h, setH] = useState(window.innerHeight)
    useEffect(() => {
        window.onresize = () => {
            setW(window.innerWidth)
            setH(window.innerHeight)
        }
    })
    return {
        w, 
        h
    }
}

export const useStyle = (w : number, h : number, scale : number) => {
    const position = 'absolute'
    const size : number = w / 10 
    const hSize : number = h / 15
    const sf : number = Math.sin(scale * Math.PI)
    return {
        dropBarStyle(n : number) : CSSProperties {
            const width = `${size}px`
            const height = `${hSize * n}px`
            const top = `${hSize * n * (sf - 1)}px`
            const display = 'flex'
            const flexDirection = 'column'
            const background = 'indigo'
            const fontSize = `${hSize / 2}px`
            const color = 'white'
            return {
                position, 
                width, 
                height, 
                display, 
                flexDirection,
                background,
                top,
                fontSize, 
                color 
            }
        },
        itemStyle() {
            const borderBottom = '10px solid white'
            const border = 'none'
            const width = `${size}px`
            const height = `${hSize}px`
            const display = 'flex'
            const justifyContent = 'center'
            const alignItems = 'center'
            return {
                border, 
                width, 
                height,
                borderBottom,
                display,
                justifyContent, 
                alignItems
            }
        }
    }
}