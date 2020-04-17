import React from 'react';

import Layout from '../components/layout/Layout'

function ListResultPage({...props}) {
    return(
        <Layout darkMode={true}>
            <h2 style={{color: `white`}}>Winner winner...</h2>
        </Layout>
    )
}

export default ListResultPage