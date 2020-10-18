import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

import * as S from './styles';
import avatar from '../../assets/images/avatar.svg';
import arrow from '../../assets/icons/arrow.svg';

const Header = ({ title, hasBackButton }) => {
  const history = useHistory();
  return (
    <S.Header>
      <S.HeaderContainer>
        <S.BackButton hasBackButton={hasBackButton} onClick={history.goBack}>
          <S.Arrow src={arrow} alt="back" />
          Back
        </S.BackButton>
        <S.Title>{title}</S.Title>
        <img src={avatar} alt="avatar" />
      </S.HeaderContainer>
    </S.Header>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  hasBackButton: PropTypes.bool
};

Header.defaultProps = {
  hasBackButton: true
};

export default Header;
