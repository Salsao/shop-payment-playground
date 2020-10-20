import styled from 'styled-components';

export const Header = styled.div`
  background-color: #f1f1f1;
  display: flex;
  height: 87px;
  margin-bottom: 81px;

  @media (max-width: 768px) {
    background-color: #ffffff;
    margin-bottom: 10px;
  }
`;

export const HeaderContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 0 100px;
  width: 100%;

  @media (max-width: 768px) {
    margin: 0 10px;
  }
`;

export const BackButton = styled.button`
  align-items: center;
  background: rgba(0, 0, 0, 0.05);
  border: none;
  border-radius: 17.4025px;
  display: flex;
  font-family: Arial;
  font-size: 21.7531px;
  font-style: normal;
  font-weight: normal;
  line-height: 25px;
  padding: 5px 20px;
  visibility: ${props => (props.hasBackButton ? 'initial' : 'hidden')};

  &:hover {
    cursor: pointer;
  }
`;

export const Arrow = styled.img`
  margin-right: 8px;
`;

export const Title = styled.div`
  color: #000000;
  font-family: Arial;
  font-size: 26.1038px;
  font-style: normal;
  font-weight: normal;
  line-height: 30px;
  text-align: center;

  @media (max-width: 768px) {
    display: none;
  }
`;
