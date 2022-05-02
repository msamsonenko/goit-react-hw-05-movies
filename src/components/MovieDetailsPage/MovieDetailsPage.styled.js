import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  padding: 10px;

  &:not(:last-child) {
    border-bottom: 1px solid black;
  }
`;
export const InfoTitle = styled.span`
  display: block;
  margin-bottom: 10px;
`;
export const ListItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;
export const Link = styled(NavLink)`
  text-decoration: none;
`;
