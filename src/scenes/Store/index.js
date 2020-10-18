import React, { useCallback, useEffect, useState } from 'react';
import { getSneakers } from '../../api/store';

import Header from '../../components/Header';
import Product from '../../components/Product';

import * as S from './styles';

const Store = () => {
  const [sneakers, setSneakers] = useState([]);
  const fetchSneakers = useCallback(async () => {
    const { data } = await getSneakers();
    setSneakers(data?.results);
  }, []);

  useEffect(() => {
    const onLoadPage = () => {
      fetchSneakers();
    };
    onLoadPage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Header title="Sneakers" />
      <S.Container>
        {sneakers.map(sneaker => (
          <Product key={sneaker.id} product={sneaker} />
        ))}
      </S.Container>
    </>
  );
};

export default Store;
