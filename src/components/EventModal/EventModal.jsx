import React from 'react'
import style from './EventModal.module.scss'

const EventModal = ({ isOpen, eventInfo, setIsOpen }) => {

    console.log(eventInfo);
    return (
        <>
            <div className={style.modalBg} style={{ display: isOpen ? 'block' : 'none' }} >
                <figure className={style.modalWrapper}>
                <img src="./close.svg" alt="" className={style.close} onClick={() => setIsOpen(false)}/>

                    <h1 style={{ backgroundColor: eventInfo.scene }}>{eventInfo.date}</h1>

                    <article className={style.imgAndText}>
                        <img src={eventInfo.image} alt="" />
                        <figcaption>
                            <h2>{eventInfo.title}</h2>
                            <p>{eventInfo.description}</p>
                        </figcaption>
                    </article>

                </figure>
            </div>
        </>
    )
}

export default EventModal