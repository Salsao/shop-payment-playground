import React, { useContext } from 'react';

import Header from '../../components/Header';
import { SneakerContext } from '../../context/Sneaker';

import * as S from './styles';

const Checkout = () => {
  const { sneaker } = useContext(SneakerContext);
  return (
    <>
      <Header title="Sneakers" hasBackButton />
      <S.Container>{sneaker?.id}</S.Container>
    </>
  );
};

export default Checkout;
