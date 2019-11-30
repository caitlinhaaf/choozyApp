import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { setTimerLength } from '../utils/actions';

import Layout from '../components/layout/Layout';
import ButtonLink from '../components/buttonLink/ButtonLink'

function LaunchListPage({...props}) {
    const dispatch = useDispatch();
    const listName = useSelector(state => state.list.activeListName);
    const timerLength = useSelector(state => state.list.timerLength);

    return(
        <Layout>
            <h2>{listName}</h2>

            <div>
                <span>Timer</span>
                <div style={{display: `flex`, marginBottom: `1rem`}}>
                    <button
                        className='buttonSm'
                        onClick={()=>{
                            if(timerLength>=5000) dispatch(setTimerLength(timerLength-5000))
                        }}>
                        -
                    </button>
                    <h4 style={{minWidth: `12rem`, textAlign: `center`}}>
                        {timerLength>0 ? `${timerLength/1000}s` : `No Timer`}
                    </h4>
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
            <Link to="/">Cancel</Link>

        </Layout>
    )
}

export default LaunchListPage