import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import { currencyValue } from '../../utils/currencyValue';

import * as S from './styles';
import { CHECKOUT_PATH, QUANTITY, SIZES } from '../../constants';
import { SneakerContext } from '../../context/Sneaker';

const Product = ({ product }) => {
  const history = useHistory();
  const { setSneaker } = useContext(SneakerContext);

  const onHandleAddToCart = product => {
    setSneaker(product);
    history.push(CHECKOUT_PATH);
  };

  return (
    <>
      <S.Card>
        <S.Thumbnail src={product?.thumbnailURL} alt="thumbnail" />
        <S.Description>{product?.description}</S.Description>
        <S.Options>
          <S.Size>
            Size{' '}
            <select defaultValue={41}>
              {SIZES.map(size => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>{' '}
          </S.Size>
          <S.Quantity>
            Quantity{' '}
            <select defaultValue={1}>
              {QUANTITY.map(quantity => (
                <option key={quantity} value={quantity}>
                  {quantity}
                </option>
              ))}
            </select>
          </S.Quantity>
        </S.Options>
        <S.Price>{currencyValue(product?.currency, product?.price)}</S.Price>
        <S.AddButton onClick={() => onHandleAddToCart(product)}>Add to cart</S.AddButton>
      </S.Card>
    </>
  );
};

Product.propTypes = {
  product: PropTypes.shape({
    color: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    maxresURL: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    thumbnailURL: PropTypes.string.isRequired
  }).isRequired
};

export default Product;
