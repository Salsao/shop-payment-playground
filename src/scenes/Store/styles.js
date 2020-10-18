import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 210px;

  ${'' /* &:after {
    content: '';
    flex: auto;
    flex: 0 0 33%;
    max-width: 300px;
  } */}
`;
