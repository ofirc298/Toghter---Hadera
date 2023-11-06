import React from 'react';
import Header from './components/Header/Header';
import Info from './components/Info/Info';
import { FromContainer } from './components/Form/FromContainer';
import { Footer } from './components/Footer/Footer';


function App() {
  return (
    <div className="[&_*]:font-heebo">
      <Header />
      <Info />
      <FromContainer />
      <Footer />
    </div>
  );
}

export default App;
