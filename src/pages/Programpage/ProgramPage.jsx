import React, { useContext, useEffect, useState } from 'react'
import { Title } from '../../components/Title/Title'
import { UserContext } from '../../context/UserContext';
import { UserProgramEvent } from '../../components/UserProgramEvent/UserProgramEvent';
import { NavLink } from 'react-router-dom';

export const ProgramPage = () => {

    const { userData } = useContext(UserContext);
    const [userEvents, setUserEvents] = useState()
    const [refresh, setRefesh] = useState(false)

    useEffect(() => {
        if (userData) {

            let options = {
                headers: {
                    Authorization: `Bearer ${userData.access_token}`
                }
            }
            fetch(`https://api.mediehuset.net/mediesuset/programme/${userData.user_id}`, options)
                .then(res => res.json())
                .then(data => setUserEvents(data))
        }
    }, [refresh])

    useEffect(() => {
        console.log(userEvents);
    }, [userEvents])

    function compare(a, b) {
        if (a.datetime < b.datetime) {
            return -1;
        }
        if (a.datetime > b.datetime) {
            return 1;
        }
        return 0;
    }

    return (
        <>
            <Title title={'MIT PROGRAM'} />

            {userData ?
                <>
                    <h3>Dine events</h3>
                </>
                :
                <>
                    <h2>Du skal være logget ind for at se dine events</h2>
                </>
            }
            {userEvents ?
                <>
                    {userEvents.items.length ?
                        userEvents.items.sort(compare).map((item, i) => {
                            return (
                                <UserProgramEvent key={i} theRef={refresh} setRef={setRefesh} date={item.datetime} title={item.event_title} stage={item.stage_name} id={item.id} />
                            )
                        })
                        :
                        <>
                            No events
                        </>
                    }
                </>
                :
                <>
                    <NavLink to='/login'>Log ind her</NavLink>
                </>
            }
        </>
    )
}
