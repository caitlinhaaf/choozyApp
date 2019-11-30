import React from 'react';
import { useSelector } from "react-redux";

import Layout from '../components/layout/Layout';
import Timer from '../components/timer/Timer'

function ActiveLinkPage({...props}) {
    const listName = useSelector(state => state.list.activeListName);

    return(
        <Layout darkMode={true}>
            <h2 style={{color: `white`}}>{listName}</h2>
            <Timer />

            {/* buttons for two active items */}
        
        </Layout>
    )
}

export default ActiveLinkPage