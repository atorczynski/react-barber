import React from 'react';
import Slider from 'react-slick';
import styled from '@emotion/styled';

const Image = styled.div`
  height: 500px;

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
  margin-top: 50px;
  outline: none;
  height: 500px;

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
  margin: auto;
  width: auto;

  @media (min-width: 320px) {
    height: 300px;
    width: auto;
  }
  @media (min-width: 768px) {
    height: 400px;
  }
  @media (min-width: 992px) {
    height: 500px;
  }
`;

export default function Gallery() {
  var settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    adaptiveHeight: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true
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
  );
}
