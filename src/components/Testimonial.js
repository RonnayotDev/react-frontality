import React from 'react'
import "../styles/components/Testimonial.css"

export default function Testimonial({content,name,designation}) {
    return (
        <div className="testimonial-container">
            <div className="content-testimonial">
                {content}
            </div>
            <div className="author">
                <div className="name">
                    {name}
                </div>
                <div className="designation">
                    {designation}
                </div>
            </div>
            
        </div>
    )
}
