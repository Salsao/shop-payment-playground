import React, { useCallback, useEffect, useState } from 'react';

import Header from '../../components/Header';
import * as S from './styles';

const Checkout = () => {
  return (
    <>
      <Header title="Sneakers" hasBackButton />
      <S.Container>Checkout</S.Container>
    </>
  );
};

export default Checkout;
