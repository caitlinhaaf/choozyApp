import React from 'react';
import { useSelector } from "react-redux";

import Layout from '../components/layout/Layout'

function LaunchListPage({...props}) {
    const listName = useSelector(state => state.list.activeListName);

    return(
        <Layout>
            <h2>{listName}</h2>

            {/* timer duration select */}

            <button>START</button>
        </Layout>
    )
}

export default LaunchListPage