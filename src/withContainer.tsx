import React from 'react'
import {useAnimatedScale, useDimension} from './hooks'
const withContainer = (MainComponent : React.FC<any>) : React.FC<any> =>   {
    return () => {
        const {scale, start : onClick} = useAnimatedScale()
        const {w, h} = useDimension()
        const defaultProps = MainComponent.defaultProps
        console.log("Default Props")
        const props = {
            w, 
            h, 
            onClick, 
            scale,
            ...defaultProps
        }
        return (
            <MainComponent {...props}>
            </MainComponent>
        )
    }
}

export default withContainer 