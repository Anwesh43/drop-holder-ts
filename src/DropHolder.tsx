import React from 'react'
import {useStyle} from './hooks'
import withContainer from './withContainer'

interface DropHolderProps {
    w : number, 
    h : number,
    scale : number, 
    onClick : Function, 
    items : Array<string>
}
const DropHolder : React.FC<DropHolderProps> = (props : DropHolderProps) => {
    const {dropBarStyle, itemStyle} = useStyle(props.w, props.h, props.scale)
    return (
        <React.Fragment>
            <div style = {dropBarStyle(props.items.length)}>
                {props.items.map((item, i) => (
                    <span style = {itemStyle()}>{item}</span>
                ))}
            </div>
            <button onClick = {() => props.onClick()} style = {{left : `${props.w /2}px`, position: 'absolute', top : `${props.h / 2}px`}}>
                Open
            </button>
        </React.Fragment>
    )
}


DropHolder.defaultProps = {
    items: ["Hello world", "More to it", "Tailwinf"]
}

export default withContainer(DropHolder)