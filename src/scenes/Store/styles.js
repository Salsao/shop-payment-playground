import styled from 'styled-components';

export const ContainerFilter = styled.div`
  display: flex;
  margin: 0 200px 57px 200px;
`;

export const Search = styled.img`
  align-self: center;
  position: absolute;
`;

export const FilterInput = styled.input`
  border: none;
  border-bottom: 1px solid #bdbdbd;
  color: #000000;
  display: flex;
  font-family: Open Sans;
  font-size: 24px;
  font-style: normal;
  font-weight: 300;
  line-height: 33px;
  padding-bottom: 12px;
  padding-left: 50px;
  text-align: center;
  width: 100%;

  ::placeholder,
  ::-webkit-input-placeholder {
    color: #a8a8a8;
  }
`;

export const ContainerProducts = styled.div`
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
