import React, { useState } from 'react'
import style from './CheckoutInfo.module.scss'

export const CheckoutInfo = ({ details }) => {

    const [ticketCount, setTicketCount] = useState(1)

    return (
        <>
            <section className={style.info1}>
                <div>
                    <span>Antal: </span>
                    <input type="number" value={ticketCount} onChange={(e) => { setTicketCount(e.target.value) }} />
                    <span> Stk.</span>
                </div>
                <p>{details?.item.name}</p>
                <p>stk. DKK {details?.item.price}</p>
                <p>DKK {(ticketCount * Number(details?.item.price)).toLocaleString()}</p>
            </section>
            <section className={style.info2}>
                <p>Pris i alt:</p>
                <p>DKK {(ticketCount * Number(details?.item.price)).toLocaleString()}</p>
            </section>
        </>
    )
}
