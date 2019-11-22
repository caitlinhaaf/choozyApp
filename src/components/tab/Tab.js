import React from 'react';
import componentStyles from "./Tab.module.scss"

function Tab({activeTab, onClick, label, ...props}) {
    const classes = activeTab ? `${componentStyles.tab} ${componentStyles.active}` : `${componentStyles.tab}`
    return(
        <div 
            onClick={() => { onClick(label) }}
            className={classes}>
            <span>{label}</span>
        </div>
    )
}

export default Tab