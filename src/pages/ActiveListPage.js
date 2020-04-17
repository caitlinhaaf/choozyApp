import React from 'react';
import { useSelector, useDispatch } from "react-redux";

import { setListPosition, setCurrentWinner } from '../utils/actions';

import Layout from '../components/layout/Layout';
import Timer from '../components/timer/Timer';
import ButtonLink from '../components/buttonLink/ButtonLink'

function ActiveLinkPage({...props}) {
    const dispatch = useDispatch();

    const listName = useSelector(state => state.list.activeListName);
    const listOptions = useSelector(state => state.list.activeListOptions);
    const listPosition = useSelector(state => state.list.activeListPosition);
    const currentWinner = useSelector(state => state.list.currentWinner);
    const timerLength = useSelector(state => state.list.timerLength);

    const makeSelection = (winnerPosition) => {
        dispatch(setCurrentWinner(winnerPosition))
        dispatch(setListPosition(listPosition+1));
      }

    return(
        <Layout darkMode={true}>
            <h2 style={{color: `white`}}>{listName} - {listPosition}</h2>

            {timerLength > 0 && <Timer />}
            
            {/* if no current winner or current position is 0 */}
            {/* grab options at current position, and current position +1 */}
            {currentWinner ?
                <ButtonLink 
                clickEvt={() => makeSelection(currentWinner)}
                linkRoute={`/list?questionNumber=${listPosition + 1}`}
                btnText={listOptions[currentWinner]}/>
                :
                <ButtonLink 
                clickEvt={() => makeSelection(listPosition)}
                linkRoute={`/list?questionNumber=${listPosition + 1}`}
                btnText={listOptions[listPosition]}/>
            }
            
            <ButtonLink 
                clickEvt={() => makeSelection(listPosition+1)}
                linkRoute={`/list?questionNumber=${listPosition + 1}`}
                btnText={listOptions[listPosition+1]}/>

        </Layout>
    )
}

export default ActiveLinkPage