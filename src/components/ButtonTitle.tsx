import * as React from "react"
interface Props {
    children?: React.ReactNode
    color?: string
}


const ButtonTitle: React.FC<Props> = ({ children, color }) => {
    return (
        <div className={`uppercase rounded-3xl px-2 text-white mr-2`} style={{ background: color }}>
            {children}
        </div>
    )
}

export default ButtonTitle
