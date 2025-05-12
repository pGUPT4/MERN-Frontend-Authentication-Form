import React from 'react'
import {useHome} from '../hooks'

interface Props {
    username: string
}

const HomePage = ({username}: Props) => {

    return (
        <>
            <div className="home_page">
                <h4>
                {" "}
                Welcome <span>{username}</span>
                </h4>
            </div>
        </>
    )
}

export default HomePage;