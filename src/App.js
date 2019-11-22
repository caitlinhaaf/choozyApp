import React from 'react';
import Tablist from './components/tablist/Tablist'

import componentStyles from "./App.module.scss";

function App() {
  return (
    <div className="App">
      
      <header className={componentStyles.header}>
        <h1>Choozy</h1>
      </header>

      <main>
        {/* TODO: add routes here */}

        {/* Lists screen */}
        <Tablist>
          <div label="Your Lists">
            <p>Tab A...</p>
          </div>
          <div label="Curated Lists">
            <p>Tab B...</p>
          </div>
          <div label="Public Lists">
            <p>Tab C...</p>
          </div>
        </Tablist>

      </main>

      <footer className={componentStyles.footer}>
        All content copyrighted {new Date().getFullYear()}
      </footer>

    </div>
  );
}

export default App;
