import React, { memo } from 'react';
import styled from 'styled-components';

const StyledTitle = styled.span`
  margin-right: auto;
  font-size: 0.9rem;
`;

interface Props {
  children: string;
}

const Title = ({ children }: Props) => {
  return <StyledTitle>{children}</StyledTitle>;
};

export default memo(Title);
