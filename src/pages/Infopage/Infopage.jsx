import React from 'react'
import { Title } from '../../components/Title/Title'
import style from './Infopage.module.scss'

export const Infopage = () => {
  return (
    <>
      <Title title={'PRAKTISK INFO'} />

      <div className={style.wrapper}>

        <h2>Adresse og kontakt</h2>
        <p>Øster Uttrup Vej 1</p>
        <p>9000 Aalborg</p>
        <p>Tlf: 12345678</p>
        <p>mail: kontakt@techcollege.dk</p>

        <h2>Kort over pladsen og adressen:</h2>

        <div className={style.images}>
          <img src="mediesuset-map.jpg" alt="" />
          <img src="Udklip.PNG" alt="" />
        </div>

      </div>
    </>
  )
}
