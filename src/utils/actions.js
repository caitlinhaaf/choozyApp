

export const setListData = data => (
    {
        type: "SET_LISTDATA", 
        payload: data
    }
)

export const setListPosition = listPosition => (
    {
        type: "SET_LISTPOSITION",
        payload: listPosition
    }
)

export const setCurrentWinner = currentWinner => (
    {
        type: "SET_CURRENTWINNER",
        payload: currentWinner
    }
)

export const setTimerLength = timerLength => (
    {
        type: "SET_TIMERLENGTH",
        payload: timerLength
    }
)

export const setCountingDown = () => (
    {
        type: "SET_COUNTINGDOWN"
    }
)

export const clearActiveList = () => (
    {
        type: "CLEAR_ACTIVELIST"
    }
)