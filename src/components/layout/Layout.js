import React from 'react';
import componentStyles from "./Layout.module.scss"

function Layout({...props}) {
    return(
        <>
            <header className={componentStyles.header}>
                <h1>Choozy</h1>
            </header>

            <main className={componentStyles.main}>
                {props.children}
            </main>

            <footer className={componentStyles.footer}>
                All content copyrighted {new Date().getFullYear()}
            </footer>
            
        </>
    )
}

export default Layout