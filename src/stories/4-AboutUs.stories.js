import React from 'react';
import AboutPerson from '../components/AboutPerson';
import AboutUs from '../components/AboutUs';

export default {
  title: 'About Us'
};

export const About = () => (
  <AboutPerson
    img={
      'https://cdn.shopify.com/s/files/1/0086/0969/3776/articles/20160607_ReuzelPomade_11_2171_copy_360x271.jpg?v=1561394516'
    }
    personName={'Rashid'}
    personCaption={'Beard Master'}
  />
);

export const AboutUsFull = () => (
  <AboutUs
    img1={
      'https://cdn.pixabay.com/photo/2016/11/29/05/11/adult-1867471_960_720.jpg'
    }
    personName1={'Marc'}
    perconCaption1={'Hair Stylist'}
    img2={
      'https://cdn.shopify.com/s/files/1/0086/0969/3776/articles/20160607_ReuzelPomade_11_2171_copy_360x271.jpg?v=1561394516'
    }
    personCaption2={'Beard Specialist'}
    personName2={'Marc'}
    img3={
      'http://www.mens-hairstyle.com/wp-content/uploads/2017/09/Beard-and-Hair-Style.jpg'
    }
    personName3={'Klaus'}
    personCaption3={'Barber'}
  />
);
