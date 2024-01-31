import React from 'react'
import style from './CampModal.module.scss'

export const CampModal = ({ isOpen, setOpen, camp, campData }) => {
    return (
        <div className={style.modalBg} style={{ display: isOpen ? 'block' : 'none' }} onClick={() => setOpen(false)}>
            <div className={style.modalWrapper}>
            <img src="./close.svg" alt="" className={style.close} onClick={() => setOpen(false)} />
                <p>Beskrivelse:</p>
                <p>{campData?.items[camp]?.description}</p>
                <p>Pladser:</p>
                <p>{campData?.items[camp]?.num_people}</p>
                <p>Adgangs armbånd:</p>
                <ul>
                    {campData?.items[camp]?.tickets.map((ticket, i) => {
                        return (
                            <p key={i}>{ticket.name}</p>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}
