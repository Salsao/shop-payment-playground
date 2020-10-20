import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styles';
import avatar from '../../assets/images/avatar.svg';
import arrow from '../../assets/icons/arrow.svg';

const Header = ({ title, hasBackButton, handleBackButton }) => (
  <S.Header>
    <S.HeaderContainer>
      <S.BackButton hasBackButton={hasBackButton} onClick={handleBackButton}>
        <S.Arrow src={arrow} alt="back" />
        Back
      </S.BackButton>
      <S.Title>{title}</S.Title>
      <img src={avatar} alt="avatar" />
    </S.HeaderContainer>
  </S.Header>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
  hasBackButton: PropTypes.bool,
  handleBackButton: PropTypes.func
};

Header.defaultProps = {
  hasBackButton: false,
  handleBackButton: () => {}
};

export default Header;
