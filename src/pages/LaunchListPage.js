import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { setListData, setTimerLength } from '../utils/actions';

import Layout from '../components/layout/Layout';
import ButtonLink from '../components/buttonLink/ButtonLink';

import listdata from '../helper/sampleLists.json'; //TODO: replace with backend data

function LaunchListPage({...props}) {
    let { category, id } = useParams();

    const dispatch = useDispatch();
    const timerLength = useSelector(state => state.list.timerLength);
    const listName = useSelector(state => state.list.activeListName);
    const listId = useSelector(state => state.list.activeListId);

    // set state using query params,if otherwise undefined
    useEffect(() => {
        if(listId===null){
            const listdataobj = listdata[category].lists.filter(list=>(list.listId===id))[0];
            console.log(listdataobj)
            dispatch(setListData(
                {
                    "listCategory": category,
                    "listName": listdataobj.listName,
                    "listId": id, 
                    "listOptions": listdataobj.listOptions
                }
            ))
        } 
    });

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
            
            <ButtonLink linkRoute="/choosing/0" btnText='START'/>
            <ButtonLink linkRoute="/listResult" outline={true} btnText='QUICK CHOOZY'/>

            <Link style={{display: `block`, maxWidth: `5rem`, textAlign: `center`, margin: `0 auto`}} to="/">Cancel</Link>

        </Layout>
    )
}

export default LaunchListPage