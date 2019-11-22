import React, {useState} from 'react';
import componentStyles from "./Tablist.module.scss";

import Tab from '../tab/Tab';

function Tablist({children, ...props}) {
    const [activeTab, setActiveTab] = useState(children[0].props.label)
    const handleTabClick = (tabClicked) => setActiveTab(tabClicked)
    
    return (
        <>
            <div className={componentStyles.tablist}>
                {children.map((child, i) => (
                    <Tab 
                        activeTab={(activeTab===child.props.label) ? true : false}
                        onClick={handleTabClick}
                        key={i}
                        label={child.props.label}/>
                ))}
            </div>

            <div className={componentStyles.tabContent}>
                {children.map((child) => {
                    if (child.props.label !== activeTab) return undefined;
                    return child.props.children;
                })}

            </div>
        </>
    );
}

export default Tablist;
