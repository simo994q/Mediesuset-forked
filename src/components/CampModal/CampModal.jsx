import React from 'react'
import style from './CampModal.module.scss'

export const CampModal = ({ isOpen, setOpen, camp, campData }) => {

    const getBg = (id) => {
        if (id === '1') {
            return 'lightgreen'
        }
        else if (id === '2') {
            return 'gold'
        }
        else {
            return 'lightblue'
        }
    }

    return (
        <div className={style.modalBg} style={{ display: isOpen ? 'block' : 'none' }}>
            <div className={style.modalWrapper}>
                <img src="./close.svg" alt="" className={style.close} onClick={() => setOpen(false)} />
                <h1>{campData?.items[camp]?.name}</h1>
                <h3>Beskrivelse</h3>
                <p>{campData?.items[camp]?.description}</p>
                <h3>Pladser</h3>
                <p>{campData?.items[camp]?.num_people}</p>
                <h3>Adgangs armbånd</h3>
                <ul>
                    {campData?.items[camp]?.tickets.map((ticket, i) => {
                        return (
                            <p key={i} style={{backgroundColor: getBg(ticket.id), width: 'fit-content'}}>{ticket.name}</p>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}
