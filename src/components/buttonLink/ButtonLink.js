import React from 'react';
import {Link} from "react-router-dom";

import componentStyles from "./ButtonLink.module.scss"

function ButtonLink({...props}) {
    return(
        <Link to='/list' className={componentStyles.buttonLink}>
            <span>{props.text}</span>
        </Link>
    )
}

export default ButtonLink