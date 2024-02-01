import React from 'react'
import style from './OrderDetails.module.scss'

export const OrderDetails = () => {
    return (
        <>
            <div className={style.wrapper}>
                <section className={style.campSect}>
                    <h3>Vælg camp:</h3>
                    <select>
                        <option value="">Camp Colorit</option>
                        <option value="">Camp Kultunaut</option>
                        <option value="">Camp De Luxe</option>
                    </select>

                    <form className={style.form}>
                        <label>
                            Email:
                            <input type="text" placeholder='Email' />
                        </label>
                        <label>
                            Adgangskode:
                            <input type="password" placeholder='Adgangskode' />
                        </label>
                        <label>
                            Gentag adgangskode:
                            <input type="password" placeholder='Gentag adgangskode' />
                        </label>
                        <label>
                            Navn:
                            <input type="text" placeholder='Navn' />
                        </label>
                        <label>
                            Adresse:
                            <input type="text" placeholder='Adresse' />
                        </label>
                        <label>
                            Postnummer:
                            <input type="number" placeholder='Postnummer' />
                        </label>
                        <label>
                            By:
                            <input type="text" placeholder='By' />
                        </label>
                    </form>


                </section>
                <section className={style.sendSect}>
                    <h3>Vælg forsendelsesmetode:</h3>
                    <label>
                        <input type='radio' name='method' />
                        Jeg ønsker billetterne bliver sendt
                    </label>
                    <label>
                        <input type='radio' name='method' />
                        Jeg udskriver billetterne selv
                    </label>
                </section>
            </div>

        </>
    )
}
