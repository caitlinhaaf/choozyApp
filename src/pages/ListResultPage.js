import React from 'react';
import { useSelector } from 'react-redux'

import Layout from '../components/layout/Layout'

function ListResultPage({...props}) {
    const listOptions = useSelector(state => state.list.activeListOptions);
    const currentWinner = useSelector(state => state.list.currentWinner);

    return(
        <Layout darkMode={true}>
            <h2 style={{color: `white`}}>Winner winner...</h2>
            <h4>{listOptions[currentWinner]}</h4>
        </Layout>
    )
}

export default ListResultPage