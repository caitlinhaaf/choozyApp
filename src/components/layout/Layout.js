import React from 'react';
import {Helmet} from 'react-helmet';
import componentStyles from "./Layout.module.scss"
// const classNames = require('classnames');

function Layout({darkMode, ...props}) {

    return(
        <>
            {darkMode &&
                <Helmet>
                    <style>
                        {'body { background-color: #8a509f; }, body * { color: white; }'
                        }
                    </style>
                </Helmet>
            }
            
            <header 
            className={darkMode ? `${componentStyles.header} ${componentStyles.darkHeader}` : `${componentStyles.header}`}>
                <h1>Choozy</h1>
            </header>

            <main className={componentStyles.main}>
                {props.children}
            </main>

            <footer 
            className={darkMode ? `${componentStyles.footer} ${componentStyles.darkFooter}` : `${componentStyles.footer}`}>
                All content copyrighted {new Date().getFullYear()}
            </footer>
            
        </>
    )
}

export default Layout