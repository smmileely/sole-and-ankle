import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import SearchInput from '../SearchInput';
import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import Spacer from '../Spacer';

const SuperHeader = () => {
  return (
    <Wrapper>
      <MarketingMessage>
        Free shipping on domestic orders over $75!
      </MarketingMessage>
      <SearchInput />
      <HelpLink href='/help'>Help</HelpLink>
      <UnstyledButton>
        <Icon id='shopping-bag' strokeWidth={1} />
      </UnstyledButton>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  /* or add spacer around helplink <Spacer size={24} />, or add margin to helplink */
  font-size: 0.875rem;
  color: ${COLORS.gray[300]};
  background-color: ${COLORS.gray[900]};
  height: 40px;
  padding-left: 30px;
  padding-right: 30px;
`;

const MarketingMessage = styled.span`
  /* flex: 1; */
  margin-right: auto;
  color: ${COLORS.white};
`;

const HelpLink = styled.a`
  /* margin-left: 24px;
  margin-right: 24px; */
  color: inherit;
  text-decoration: none;
  outline-offset: 2px;

  &:not(:focus-visible) {
    outline: none;
  }
`;

export default SuperHeader;
