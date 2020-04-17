import React from 'react';
import { Link } from "react-router-dom";

import componentStyles from "./ButtonLink.module.scss"

function ButtonLink({linkRoute, clickEvt, btnText, outline, ...props}) {
    const classes = outline ? `${componentStyles.buttonLink} ${componentStyles.outline}` : `${componentStyles.buttonLink} ${componentStyles.solid}`

    return(
        <Link 
            to={linkRoute} 
            className={classes}
            onClick={clickEvt}
            >
            <span>{btnText}</span>
        </Link>
    )
}

export default ButtonLink;