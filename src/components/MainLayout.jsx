import React, { useEffect } from 'react';
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
  height: calc(100vh);
  .scrollLock {
    overflow: hidden;
  }
`;

const MainLayout = ({ children }) => {
  useEffect(() => {
    document.body.style.cssText = `
      position: fixed;
      top: -${window.scrollY}px;
      overflow-y: scroll;
      width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = '';
      window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
    };
  }, []);

  return (
    <LayoutWrapper>
      <StyledMainLayout>{children}</StyledMainLayout>
    </LayoutWrapper>
  );
};

export default MainLayout;
