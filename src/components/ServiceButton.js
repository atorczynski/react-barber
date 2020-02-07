import styled from '@emotion/styled';

const ServiceButton = styled.button`
  margin: 20px;
  width: 108px;
  height: 25px;
  border-radius: 12.5px;
  border: none;
  outline: none;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  font-weight: normal;
  font-size: 15px;
  font-family: 'Roboto', sans-serif;
  letter-spacing: 0.05em;
  text-align: center;
  transition: background-color 0.5s ease-in-out;

  &:hover {
    background-color: #ffdca5;
  }
`;

export default ServiceButton;
