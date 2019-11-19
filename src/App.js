import React from 'react';
import componentStyles from "./App.module.scss"

function App() {
  return (
    <div className="App">
      
      <header className={componentStyles.header}>
        <h1>Choozy</h1>
      </header>

      <main>
        {/* TODO: add routes here */}

        {/* Lists screen */}


      </main>

      <footer className={componentStyles.footer}>
        All content copyrighted {new Date().getFullYear()}
      </footer>

    </div>
  );
}

export default App;
