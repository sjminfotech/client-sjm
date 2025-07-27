// components/HomePage.jsx
import React from 'react';
import Hero from './Hero';
import Counter from './counter';
import Services from './services';
import Pricing from './pricing';
import Faq from './faq';
import Processing from './processing';
import Contact from './contact';
import Review from './review';
import Footer from './Footer';

const HomePage = () => {
  return (
    <>
      <Hero />
      <Counter />
      <Services />
      {/* <Pricing /> */}
      <Faq />
      <Processing />
      <Contact />
      <Review />
      <Footer />
    </>
  );
};
export default HomePage;
