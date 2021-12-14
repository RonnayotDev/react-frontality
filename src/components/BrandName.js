import React from 'react'
import "../styles/components/BrandName.css"

export default function BrandName({isFooter=false}) {
    return (
        <div className={`brand ${isFooter===true ? "footer" : ""}`}>
            <span>Frontality</span>
        </div>
    )
}
