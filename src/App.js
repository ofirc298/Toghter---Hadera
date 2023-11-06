import React from 'react';
import Header from './components/Header/Header';
import Info from './components/Info/Info';
import { FromContainer } from './components/Form/FromContainer';
import { Footer } from './components/Footer/Footer';
import { Banner } from './components/Footer/Banner';
import { Contact } from './components/Footer/Contact';


function App() {
  return (
    <div className="[&_*]:font-heebo bg-background">
      <Header />
      <Info />
      <FromContainer />
      <Banner />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
