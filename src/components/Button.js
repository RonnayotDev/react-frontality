import React from 'react'
import "../styles/components/Button.css"

export default function Button({content,icon="",color="purple"}) {
    return (
        <button className={`${color}`}>
            {content} {icon}
        </button>
    )
}
