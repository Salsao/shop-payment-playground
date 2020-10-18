import React from 'react';
import PropTypes from 'prop-types';

import { currencyValue } from '../../utils/currencyValue';

import * as S from './styles';

const Product = ({ product }) => (
  <S.Card>
    <img src={product?.thumbnailURL} alt="thumbnail" />
    <span>{product?.description}</span>
    <span>{currencyValue(product?.currency, product?.price)}</span>
    <button>Add to cart</button>
  </S.Card>
);

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
