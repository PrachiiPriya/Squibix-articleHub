import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// Navbar container styled component
const NavbarContainer = styled.nav`
  background-color: #000000; /* Black background */
  color: #ffffff; /* White text */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2); /* Slightly stronger shadow */
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  position: sticky;
  top: 0;
  z-index: 1000;
  width: 100%; /* Ensure it spans full width */
`;

// Logo styled component
const Logo = styled.h1`
  font-size: 1.5rem;
  color: #ffffff; /* White logo text */
  margin: 0;
`;

// Container for navigation links
const NavLinks = styled.div`
  display: flex;
  gap: 20px;
`;

// Styled Link component for navigation
const NavLink = styled(Link)`
  text-decoration: none;
  color: #ffffff; /* White text */
  font-weight: 500;

  &:hover {
    color: #0078ff; /* Blue hover effect */
  }
`;

// Container for action buttons like Login
const Actions = styled.div`
  display: flex;
  gap: 10px;
`;

// Styled button component
const Button = styled.button`
  background-color: #0078ff; /* Blue button */
  color: #ffffff; /* White text */
  border: none;
  border-radius: 4px;
  padding: 8px 12px;
  cursor: pointer;

  &:hover {
    background-color: #005fcc; /* Darker blue on hover */
  }
`;

function Navbar() {
  return (
    <NavbarContainer>
      {/* Logo */}
      <Logo>📚 ArticleHub</Logo>

      {/* Navigation links */}
      <NavLinks>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/editor">Create Article</NavLink>
        <NavLink to="/bookmarks">Bookmarks</NavLink>
      </NavLinks>

      {/* Action buttons */}
      {/* <Actions>
        <Button>Login</Button>
      </Actions> */}
    </NavbarContainer>
  );
}

export default Navbar;
