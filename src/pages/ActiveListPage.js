import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { setListPosition, setCurrentWinner } from '../utils/actions';

import Layout from '../components/layout/Layout';
import Timer from '../components/timer/Timer';
import ButtonLink from '../components/buttonLink/ButtonLink'

function ActiveLinkPage({...props}) {

    // TODO: if active list data not set, re-route to home page

    //TODO: use query params and state to enable navigation back to resubmit question
    // let { listPosition } = useParams();
    const dispatch = useDispatch();
    const history = useHistory();

    const listName = useSelector(state => state.list.activeListName);
    const listOptions = useSelector(state => state.list.activeListOptions);
    const listPosition = useSelector(state => state.list.activeListPosition);
    const currentWinner = useSelector(state => state.list.currentWinner);
    const timerLength = useSelector(state => state.list.timerLength);

    const makeSelection = (winnerPosition) => {
        dispatch(setCurrentWinner(winnerPosition))
        dispatch(setListPosition(listPosition+1));
    }

    useEffect(()=>{
        if(listPosition+1 >= listOptions.length) history.push("/listResult");
    })


    return(
        <Layout darkMode={true}>
            <h2 style={{color: `white`}}>{listName} - {listPosition}</h2>

            {timerLength > 0 && <Timer />}
            
            {/* if no current winner or current position is 0 */}
            {/* grab options at current position, and current position +1 */}
            {currentWinner !== null ?
                <ButtonLink 
                clickEvt={() => makeSelection(currentWinner)}
                linkRoute={`/choosing/${listPosition + 1}`}
                btnText={listOptions[currentWinner]}/>
                :
                <ButtonLink 
                clickEvt={() => makeSelection(listPosition)}
                linkRoute={`/choosing/${listPosition + 1}`}
                btnText={listOptions[listPosition]}/>
            }
            
            <ButtonLink 
                clickEvt={() => makeSelection(listPosition+1)}
                linkRoute={`/choosing/${listPosition + 1}`}
                btnText={listOptions[listPosition+1]} />
        </Layout>
    )
}

export default ActiveLinkPage