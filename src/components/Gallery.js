import React from 'react';
import Slider from 'react-slick';
import styled from '@emotion/styled';
import Heading from './Heading';

const GalleryWrapper = styled.div`
  margin-top: 30px;
`;

const Image = styled.div`
  display: flex;
  justify-content: center;
  height: 700px;
  overflow: hidden;

  @media (min-width: 320px) {
    height: 300px;
  }
  @media (min-width: 768px) {
    height: 400px;
  }
  @media (min-width: 992px) {
    height: 500px;
  }
`;

const MySlider = styled(Slider)`
  outline: none;
  height: 500px;
  overflow: hidden;
  @media (min-width: 320px) {
    height: 300px;
  }
  @media (min-width: 768px) {
    height: 400px;
  }
  @media (min-width: 992px) {
    height: 500px;
  }
`;

const SliderImage = styled.img`
  @media (min-width: 320px) {
    height: 300px;
    margin: auto;
  }
  @media (min-width: 768px) {
    margin: auto;
    height: 400px;
  }
  @media (min-width: 992px) {
    margin: auto;
    height: 500px;
  }
`;

export default function Gallery() {
  var settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    centerMode: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          centerMode: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <GalleryWrapper className={'gallery'}>
      <Heading
        backgroundColor={'#eae8e8'}
        textColor={'#232a34'}
        heading={'Gallery'}
      />
      <MySlider {...settings} className={'gallery'}>
        <Image>
          <SliderImage src='https://cdn.pixabay.com/photo/2018/02/22/17/09/barber-shop-3173422_960_720.jpg'></SliderImage>
        </Image>
        <Image>
          <SliderImage src='https://cdn.pixabay.com/photo/2016/02/04/17/13/razor-1179458_960_720.jpg'></SliderImage>
        </Image>
        <Image>
          <SliderImage src='https://cdn.pixabay.com/photo/2018/02/22/17/08/barber-3173419_960_720.jpg'></SliderImage>
        </Image>
        <Image>
          <SliderImage src='https://cdn.pixabay.com/photo/2020/02/03/17/39/beach-4816249_960_720.jpg'></SliderImage>
        </Image>
      </MySlider>
    </GalleryWrapper>
  );
}
