import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  margin: 10px;
  padding: 5px;
`;

export const Link = styled(NavLink)`
  margin-right: 20px;
  text-decoration: none;
`;
