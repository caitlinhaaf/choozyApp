import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
// import { createSelector } from 'reselect';
import { Link } from "react-router-dom";
import queryString from "query-string"

import { setListData, setTimerLength } from '../utils/actions';

import Layout from '../components/layout/Layout';
import ButtonLink from '../components/buttonLink/ButtonLink';

import listdata from '../helper/sampleLists.json'; //TODO: replace with backend data

function LaunchListPage({...props}) {
    // TODO: if current list not set in state, get query params (category, listId)
    const dispatch = useDispatch();
    const timerLength = useSelector(state => state.list.timerLength);
    const listName = useSelector(state => state.list.activeListName);

    const parsed = queryString.parse(window.location.search);

    console.log(window.location.search);
    console.log(parsed);
    // dispatch(setListData({
    //     "listCategory": listCategory,
    //     "listName": listName,
    //     "listId": listId, 
    //     "listOptions": listOptions
    // }))

    return(
        <Layout>
            <h2>{listName}</h2>
            <div>
                <h3 style={{marginBottom: `.5rem`}}>Timer</h3>
                <div style={{display: `flex`, marginBottom: `1rem`, alignItems: `center`}}>
                    <button
                        className='buttonSm'
                        onClick={()=>{
                            if(timerLength>=5000) dispatch(setTimerLength(timerLength-5000))
                        }}>
                        -
                    </button>
                    
                    <div style={{width: `5rem`}}>
                        {timerLength>0 
                        ? 
                        <h4 style={{textAlign: `center`}}>
                            {`${timerLength/1000}s`} 
                        </h4>
                        : 
                        <h4 style={{textAlign: `center`, fontSize: `1.5rem`}}>No<br/>Timer</h4>}
                    </div>
                    
                    <button 
                        className='buttonSm'
                        onClick={()=>{
                            if(timerLength<30000)dispatch(setTimerLength(timerLength+5000))
                        }}>
                        +
                    </button>
                </div>
            </div>
            
            <ButtonLink linkRoute="/list" btnText='START'/>
            <ButtonLink linkRoute="/listResult" outline={true} btnText='QUICK CHOOZY'/>

            <Link style={{display: `block`, maxWidth: `5rem`, textAlign: `center`, margin: `0 auto`}} to="/">Cancel</Link>

        </Layout>
    )
}

export default LaunchListPage