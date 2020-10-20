import styled from 'styled-components';

import { colors } from '../../constants';

export const ProgressBarContainer = styled.div`
  background: ${colors.white};
  padding-top: 10px;
  padding-bottom: 5px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const ProgressBarUl = styled.ul`
  display: flex;
  margin-bottom: 50px;
`;

export const ProgressBarLi = styled.li`
  list-style-type: none;
  width: 33%;
  float: left;
  font-size: 12px;
  position: relative;
  text-align: center;
  color: ${props => (props.active ? colors.black : colors.gray9)};
  font-family: Arial;
  font-size: 16px;
  font-style: normal;
  font-weight: normal;
  line-height: 18px;
  text-align: center;

  &:before {
    width: 15px;
    height: 15px;
    content: '';
    line-height: 15px;
    display: block;
    text-align: center;
    margin: 0 auto 3px auto;
    border-radius: 50%;
    position: relative;
    z-index: 2;
    background-color: ${props => (props.active ? colors.lightGreen : colors.gray3)};
  }

  &:after {
    width: 100%;
    height: 1px;
    content: '';
    position: absolute;
    background-color: ${colors.gray3};
    top: 6px;
    left: -50%;
    z-index: 0;
  }

  &:first-child:after {
    content: none;
  }
`;
