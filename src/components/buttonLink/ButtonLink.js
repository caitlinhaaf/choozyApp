import React from 'react';
import { Link } from "react-router-dom";

import componentStyles from "./ButtonLink.module.scss"

function ButtonLink({linkRoute, clickEvt, btnText, ...props}) {
    return(
        <Link 
            to={linkRoute} 
            className={componentStyles.buttonLink}
            onClick={clickEvt}
            >
            <span>{btnText}</span>
        </Link>
    )
}

export default ButtonLink;