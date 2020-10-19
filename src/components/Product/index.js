import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import { currencyValueWithSpace } from '../../utils/currencyValue';
import { SneakerContext } from '../../context/Sneaker';

import * as S from './styles';
import { CHECKOUT_PATH, QUANTITY, SIZES } from '../../constants';

const Product = ({ product }) => {
  const history = useHistory();
  const { setSneaker } = useContext(SneakerContext);
  const [productForm, setProductForm] = useState({ quantity: 1, size: 41 });

  const handleInputChange = (name, value) => {
    setProductForm({ ...productForm, [name]: value });
  };

  const handleAddToCart = product => {
    setSneaker({ ...product, ...productForm });
    history.push(CHECKOUT_PATH);
  };

  return (
    <S.Card>
      <S.Thumbnail src={product?.thumbnailURL} alt="thumbnail" />
      <S.Description>{product?.description}</S.Description>
      <S.Options>
        <S.Size>
          Size{' '}
          <select value={productForm?.size} onChange={e => handleInputChange('size', e.currentTarget.value)}>
            {SIZES.map(size => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>{' '}
        </S.Size>
        <S.Quantity>
          Quantity{' '}
          <select value={productForm?.quantity} onChange={e => handleInputChange('quantity', e.currentTarget.value)}>
            {QUANTITY.map(quantity => (
              <option key={quantity} value={quantity}>
                {quantity}
              </option>
            ))}
          </select>
        </S.Quantity>
      </S.Options>
      <S.Price>{currencyValueWithSpace(product?.currency, product?.price)}</S.Price>
      <S.AddButton onClick={() => handleAddToCart(product)}>Add to cart</S.AddButton>
    </S.Card>
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
