import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './modul/component/header.js';
import FirstScreen from './modul/component/firstScreen.js';
import SecondScreen from './modul/component/secondScreen.js';
import TherdScreen from './modul/component/thirdScreen.js';
import FourScreen from './modul/component/fourScreen.js';
import FiveScreen from './modul/component/fiveScreen.js';
import Reviews from './modul/component/reviews.js';
import NewsBlock from './modul/component/newsScreen.js';
import Footer from './modul/component/footer.js';
import Registration from './modul/component/util/registration.js'; 
import Authorization from './modul/component/util/authorization.js';

const Home = () => {
  return (
    <div>
      <Header />
      <FirstScreen />
      <SecondScreen />
      <TherdScreen />
      <FourScreen />
      <FiveScreen />
      <Reviews />
      <NewsBlock />
      <Footer />
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registration" element={<Registration />} /> 
        <Route path="/authorization" element={<Authorization />} /> 
      </Routes>
    </Router>
  );
};

export default App;