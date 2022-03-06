import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

import './menu-item-styles.scss'

export const MenuItem = ({title, size, imageUrl, linkUrl}) => {
    const navigate = useNavigate()
    const location = useLocation()

    return (
        <div className={`${size} menu-item`} onClick={() => { navigate(`${location.hash}${linkUrl}`)} }>
            <div className="background-image" 
            style= {{
                backgroundImage: `url(${imageUrl})`
            }}
            />
                <div className="content">
                    <h1 className="title">{title.toUpperCase()}</h1>
                    <span className="subtitle">shop now</span>
                </div>
            </div>
    )
}