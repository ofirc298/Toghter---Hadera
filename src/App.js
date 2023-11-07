import React from 'react';
import Header from './components/Header/Header';
import Info from './components/Info/Info';
import { FormContainer } from './components/Form/FormContainer';
import { Footer } from './components/Footer/Footer';
import { Banner } from './components/Footer/Banner';
import { Contact } from './components/Footer/Contact';


function App() {
  return (
    <div className="[&_*]:font-heebo bg-background">
      <Header />
      <Info />
      <FormContainer />
      <Banner />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
