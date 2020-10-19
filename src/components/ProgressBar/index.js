import React from 'react';
import PropTypes from 'prop-types';

import { STEP_CART, STEP_PAYMENT, STEP_RECEIPT } from '../../constants';
import * as S from './styles';

const ProgressBar = ({ step }) => (
  <S.ProgressBarContainer>
    <S.ProgressBarUl>
      <S.ProgressBarLi active={step >= STEP_CART}>Cart</S.ProgressBarLi>
      <S.ProgressBarLi active={step >= STEP_PAYMENT}>Payment options</S.ProgressBarLi>
      <S.ProgressBarLi active={step >= STEP_RECEIPT}>Receipt</S.ProgressBarLi>
    </S.ProgressBarUl>
  </S.ProgressBarContainer>
);

ProgressBar.propTypes = {
  step: PropTypes.number.isRequired
};

export default ProgressBar;
