import styled from 'styled-components';

import { colors } from '../../constants';

export const Card = styled.div`
  align-items: center;
  box-shadow: 0px 6px 16px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  margin-bottom: 66px;
  max-width: 300px;
  padding-bottom: 11px;
`;

export const Thumbnail = styled.img`
  margin-bottom: 15px;
`;

export const Description = styled.span`
  font-family: Open Sans;
  font-size: 20px;
  font-style: normal;
  font-weight: normal;
  line-height: 18px;
  margin-bottom: 15px;
`;

export const Options = styled.div`
  color: ${colors.gray7};
  display: flex;
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  justify-content: space-evenly;
  line-height: 18px;
  margin-bottom: 15px;
  width: 100%;
`;

export const Price = styled.span`
  font-family: Open Sans;
  font-size: 21px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px;
  margin-bottom: 15px;
`;

export const Select = styled.select`
  border: 1px solid ${colors.gray3};
  border-radius: 25.2271px;
  color: ${colors.gray8};
  font-family: Open Sans;
  font-size: 12px;
  font-style: normal;
  font-weight: normal;
  height: 27px;
  line-height: 18px;
  margin-left: 5px;
  padding-left: 5px;
  width: 69px;
`;

export const AddButton = styled.button`
  background-color: ${colors.darkGreen};
  border: none;
  border-radius: 4.50483px;
  color: ${colors.white};
  font-family: Open Sans;
  font-size: 14px;
  font-style: normal;
  font-weight: bold;
  height: 41px;
  line-height: 19px;
  text-align: center;
  width: 90%;

  &:hover {
    cursor: pointer;
  }
`;
