import React, { useEffect } from 'react'
import "../styles/components/Blog.css"
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import Button from './Button'
import Aos from "aos"
import "aos/dist/aos.css"

export default function Blog({image,title,subTitle}) {
    useEffect(() => {
        Aos.init({duration:1000})
    },[])
    return (
        <div className="blog-container" data-aos="zoom-in">
            <div className="image-blog">
                <img src={image} alt="Blog"/>
            </div>
            <div className="content-blog">
                <div className="title-blog">
                    <h3>{title}</h3>
                </div>
                <div className="subTitle-blog">
                    <p>{subTitle}</p>
                </div>
                <Button content="Read More" icon={<HiOutlineArrowNarrowRight/>}/>
            </div>
        </div>
    )
}
