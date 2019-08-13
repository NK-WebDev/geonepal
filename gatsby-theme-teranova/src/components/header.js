import React, { useState } from 'react';
import NavBrand from './navBrand';
import Navbar from './navbar';
import styled from '@emotion/styled';
import NavToggle from '../components/navToggle';

const HeaderStyled = styled.header`
  display: grid;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
  background-color: ${props => props.theme.colors.white};
  grid-template-columns: minmax(100px, 150px) 1fr;
  padding: 0rem 1rem;
  align-items: center;
  border-bottom: 2px solid ${props => props.theme.colors.grey};
  @media (max-width: 844px) {
    grid-template-columns: minmax(100px, 120px) 90px;
    justify-content: space-between;
  }
`;

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <HeaderStyled>
      <NavBrand />
      <NavToggle
        isOpen={isOpen}
        onToggle={() => {
          setIsOpen(!isOpen);
        }}
      />
      <Navbar isOpen={isOpen} />
    </HeaderStyled>
  );
}

export default Header;
