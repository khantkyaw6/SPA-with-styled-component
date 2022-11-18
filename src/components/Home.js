import React from 'react';
import Nav from './Nav';
import styled from 'styled-components';
import downloadImg from '../images/download.webp';
import forestImg from '../images/forest.avif';
import { Button } from '../styles/Shares';

const FlexDiv = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
  display: flex;
  padding: 0 20px;
  align-items: center;
`;

const Flex = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

export default function Home() {
  return (
    <>
      <Nav />
      <FlexDiv>
        <Flex>
          <h1>Higher Education</h1>
          <h4 style={{ marginTop: '10px' }}>
            Professional Computer Programming Center
          </h4>
          <Button>Download</Button>
        </Flex>
        <Flex>
          <img src={downloadImg} style={{ width: '80%' }} alt='ads' />
        </Flex>
      </FlexDiv>
      <FlexDiv>
        <Flex>
          <img src={forestImg} style={{ width: '80%' }} alt='ads' />
        </Flex>
        <Flex>
          <p>
            Lorem ipsum dolor sit amet consectetur quas quos quaerat itaque
            distinctio! Ipsam, fugit labore dolorem officiis dicta porro
            repudiandae perspiciatis quaerat consequatur culpa accusantium
            dolore, consequuntur sed.
          </p>
        </Flex>
      </FlexDiv>
      <FlexDiv>
        <Flex>
          <p>
            Lorem ipsum dolor sit amet consectetur quas quos quaerat itaque
            distinctio! Ipsam, fugit labore dolorem officiis dicta porro
            repudiandae perspiciatis quaerat consequatur culpa accusantium
            dolore, consequuntur sed.
          </p>
        </Flex>
        <Flex>
          <img src={forestImg} style={{ width: '80%' }} alt='ads' />
        </Flex>
      </FlexDiv>
    </>
  );
}
