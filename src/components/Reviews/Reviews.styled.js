import styled from 'styled-components';

export const ListItem = styled.li`
  border-bottom: 1px solid black;
  padding: 5px;
  background: #fff;

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;
export const ReviewList = styled.ul`
  margin-bottom: 20px;
`;
export const ReviewItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 5px;
  }
`;
export const Author = styled.span`
  font-weight: 700;
`;
export const DateTime = styled.span`
  font-weight: 500;
`;
