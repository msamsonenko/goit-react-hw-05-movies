import styled from 'styled-components';

export const MovieContainer = styled.div`
  display: flex;
  width: 100%;
`;
export const ContentWrapper = styled.div`
  width: 30%;
  padding: 10px;
`;
export const MovieTitle = styled.h1`
  margin-bottom: 10px;
`;
export const ListContainer = styled.div`
  display: flex;
  margin-bottom: 20px;
`;
export const List = styled.ul`
  &:not(:last-child) {
    margin-right: 50px;
  }
`;
export const ListItem = styled.li`
  &: not(: last-child) {
    margin-bottom: 10px;
  }
`;
export const Overview = styled.span`
  display: block;
  font-weight: 700;
  margin-bottom: 20px;
`;
