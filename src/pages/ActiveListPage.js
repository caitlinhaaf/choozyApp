import React from 'react';
import { useSelector } from "react-redux";

import Layout from '../components/layout/Layout'

function ActiveLinkPage({...props}) {
    const listName = useSelector(state => state.list.activeListName);

    // add 10 second timer that clears when hits 0 or a selection is made
    return(
        <Layout darkMode={true}>
            <h2 style={{color: `white`}}>{listName}</h2>
            
            {/* timer element*/}

            {/* buttons for two active items */}
        
        </Layout>
    )
}

export default ActiveLinkPage