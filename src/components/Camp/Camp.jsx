import React from 'react'
import style from './Camp.module.scss'

export const Camp = ({ image, name, shorttext, setCamp, setOpen, number }) => {
    return (
        <figure className={style.campWrapper}>
            <div>
                <img src={image} alt="" />
                <h2>{name}</h2>
                <p>{shorttext}</p>
            </div>
            <button onClick={() => {setCamp(number), setOpen(true)}}>Læs mere</button>
        </figure>
    )
}
