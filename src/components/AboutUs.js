import React from 'react';
import styled from '@emotion/styled';
import AboutPerson from './AboutPerson';

const AboutUsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: hidden;
  margin-top: 50px;
  box-shadow: 0px 10px 35px -5px rgba(0, 0, 0, 0.75);
`;

const HeadingWrapper = styled.div`
  display: flex;
  height: 50px;
  width: 100%;
  background: #4e5866;
  justify-content: center;
  align-items: center;
`;

const Heading = styled.h2`
  color: white;
  text-decoration: underline;
`;

const PersonWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  overflow: hidden;
  flex-wrap: wrap;
  background: #232a34;
  width: 100%;
`;

export default function AboutUs(props) {
  const personTexts = {
    lorem:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'
  };

  return (
    <AboutUsWrapper className={'aboutus'}>
      <HeadingWrapper>
        <Heading>About Us</Heading>
      </HeadingWrapper>
      <PersonWrapper>
        <AboutPerson
          img={
            'https://cdn.pixabay.com/photo/2016/11/29/05/11/adult-1867471_960_720.jpg'
          }
          personName={'Marc'}
          personCaption={'Hair Stylist'}
          personDescription={personTexts.lorem}
        />

        <AboutPerson
          img={
            'https://cdn.shopify.com/s/files/1/0086/0969/3776/articles/20160607_ReuzelPomade_11_2171_copy_360x271.jpg?v=1561394516'
          }
          personCaption={'Beard Specialist'}
          personName={'Marc'}
          personDescription={personTexts.lorem}
        />
        <AboutPerson
          img={
            'http://www.mens-hairstyle.com/wp-content/uploads/2017/09/Beard-and-Hair-Style.jpg'
          }
          personName={'Klaus'}
          personCaption={'Barber'}
          personDescription={personTexts.lorem}
        />
      </PersonWrapper>
    </AboutUsWrapper>
  );
}
