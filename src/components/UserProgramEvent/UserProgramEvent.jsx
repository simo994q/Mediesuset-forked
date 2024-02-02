import React, { useContext } from 'react'
import style from './UserProgramEvent.module.scss'
import { UserContext } from '../../context/UserContext';

export const UserProgramEvent = ({ date, title, stage, id, setRef, theRef }) => {
    const { userData } = useContext(UserContext);

    const getColor = (stage) => {
        switch (stage) {
            case 'Rød scene':
                return 'rgb(255, 40, 40)'
            case 'Grøn scene':
                return 'rgb(60, 170, 30)'
            case 'Blå scene':
                return 'rgb(40, 40, 255)'
            case 'Lilla scene':
                return 'rgb(150, 40, 150)'
        }
    }

    const deleteEvent = (id) => {
        let options = {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${userData.access_token}`
            }
        }

        fetch(`https://api.mediehuset.net/mediesuset/programme/${id}`, options)
        .then(res => res.json())
        .then(data => {console.log(data), setRef(!theRef)})
        
    }

    return (
        <>
            <div className={style.wrapper}>
                <div className={style.date} style={{ backgroundColor: getColor(stage) }}>
                    {date.slice(11, 16)}
                </div>
                <div className={style.name}>
                    <p>
                        {title}
                    </p>
                    <img src="close.svg" alt="" onClick={() => deleteEvent(id)} />
                </div>
            </div>
        </>
    )
}
