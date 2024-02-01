import React, { useContext } from 'react'
import { Title } from '../../components/Title/Title'
import { UserContext } from '../../context/UserContext';

export const ProgramPage = () => {

    const { setUserData, userData } = useContext(UserContext);

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
        </>
    )
}
