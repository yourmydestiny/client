import React from 'react';
import styled from 'styled-components';

const StyledMainLayout = styled.div`
  position: relative;
  width: 100%;
  max-width: 430px;
  border: 1px solid black;
  height: 100%;
  margin: auto;
  ::-webkit-scrollbar {
    display: none;
  }
  overflow-y: scroll;
`;

const LayoutWrapper = styled.div`
  width: 100%;
  display: inline-block;
  height: 100vh;
`;

const MainLayout = ({ children }) => {
  return (
    <LayoutWrapper>
      <StyledMainLayout>{children}</StyledMainLayout>
    </LayoutWrapper>
  );
};

export default MainLayout;
