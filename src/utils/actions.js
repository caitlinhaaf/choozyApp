export const setListData = data => (
    {
        type: "SET_LISTDATA", 
        payload: data
    }
)

export const setTimerLength = timerLength => (
    {
        type: "EVENTS_ERROR",
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