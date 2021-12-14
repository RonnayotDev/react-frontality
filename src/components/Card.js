import React from 'react'
import '../styles/components/Card.css'

export default function Card({Logo , title}) {
    return (
        <div className="card">
            <div className="logo">
                {Logo}
            </div>
            <div className="card-title">
                {title}
            </div>
        </div>
    )
}
