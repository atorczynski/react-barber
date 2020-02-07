import React from 'react';
import styled from '@emotion/styled';
import AboutPerson from './AboutPerson';

const AboutUsWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  flex-wrap: wrap;
  height: 325px;
  background: #ffdca5;
  margin-top: 50px;
  background: lightgray;
  box-shadow: 0px 10px 35px -5px rgba(0, 0, 0, 0.75);

  @media (min-width: 320px) {
    height: 950px;
  }
  @media (min-width: 768px) {
    height: 400px;
  }
  @media (min-width: 992px) {
    height: 500px;
  }
`;

export default function AboutUs(props) {
  return (
    <AboutUsWrapper>
      <AboutPerson
        img={
          'https://cdn.pixabay.com/photo/2016/11/29/05/11/adult-1867471_960_720.jpg'
        }
        personName={'Marc'}
        personCaption={'Hair Stylist'}
      />
      <AboutPerson
        img={
          'https://cdn.shopify.com/s/files/1/0086/0969/3776/articles/20160607_ReuzelPomade_11_2171_copy_360x271.jpg?v=1561394516'
        }
        personCaption={'Beard Specialist'}
        personName={'Marc'}
      />
      <AboutPerson
        img={
          'http://www.mens-hairstyle.com/wp-content/uploads/2017/09/Beard-and-Hair-Style.jpg'
        }
        personName={'Klaus'}
        personCaption={'Barber'}
      />
    </AboutUsWrapper>
  );
}
