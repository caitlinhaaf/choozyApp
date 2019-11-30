import React from 'react';
import {Link} from "react-router-dom";
import { useDispatch} from "react-redux";
import {setListData} from '../../utils/actions'

import componentStyles from "./ButtonLink.module.scss"

function ButtonLink({listName, listOptions, ...props}) {
    const dispatch = useDispatch();

    return(
        <Link 
            to='/listlaunch' 
            className={componentStyles.buttonLink}
            onClick={() => dispatch(setListData(
                {"listName": listName, "listOptions": listOptions}
                ))
            }
            >
            <span>{listName}</span>
        </Link>
    )
}

export default ButtonLink;