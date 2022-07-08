import React from 'react';
import styled from 'styled-components/macro';

import SHOES from '../../data';
import ShoeCard from '../ShoeCard';

const ShoeGrid = () => {
  return (
    <Wrapper>
      {SHOES.map((shoe) => (
        <ShoeWrapper>
          <ShoeCard key={shoe.slug} {...shoe} />
        </ShoeWrapper>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  /*
    Alternatively, if we can't use 'gap', we could set:
    margin: -16px;
    We'd also need to set this on the ShoeWrapper:
    margin: 16px;
  */
`;

const ShoeWrapper = styled.div`
  min-width: 275px;
  max-width: 450px;
  /* need to set image in the shoewrapper to be 100% to be filled exactly in the container, instead of grow intrinsically  */
  flex: 1;
`;

export default ShoeGrid;
