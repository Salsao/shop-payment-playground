import React, { useCallback, useEffect, useState } from 'react';
import { getSneakers } from '../../api/store';

import Header from '../../components/Header';
import Product from '../../components/Product';

import search from '../../assets/icons/search.svg';
import * as S from './styles';

const Store = () => {
  const [sneakers, setSneakers] = useState([]);
  const [sneakersData, setSneakersData] = useState([]);
  const [filterInput, setFilterInput] = useState('');
  const fetchSneakers = useCallback(async () => {
    const { data } = await getSneakers();
    setSneakersData(data?.results);
  }, []);

  useEffect(() => {
    const onLoadPage = () => {
      fetchSneakers();
    };
    onLoadPage();
  }, [fetchSneakers]);

  useEffect(() => {
    const onFilter = () => {
      setSneakers(sneakersData.filter(sneaker => sneaker.description.toLowerCase().includes(filterInput.toLowerCase())));
    };
    onFilter();
  }, [sneakersData, filterInput]);

  const handleInputChange = value => {
    setFilterInput(value);
  };

  return (
    <>
      <Header title="Sneakers" />
      <S.ContainerFilter>
        <S.Search src={search} alt="search" />
        <S.FilterInput
          placeholder="Search for your sneaker"
          type="text"
          value={filterInput}
          onChange={e => handleInputChange(e.currentTarget.value)}
        />
      </S.ContainerFilter>
      <S.ContainerProducts>
        {sneakers.length > 0 ? sneakers.map(sneaker => <Product key={sneaker.id} product={sneaker} />) : 'No matches found'}
      </S.ContainerProducts>
    </>
  );
};

export default Store;
