import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import Header from '../../components/Header';
import { SneakerContext } from '../../context/Sneaker';
import { currencyValue } from '../../utils/currencyValue';
import { APPLE_PAY, CARD, ONLINE_BANKING, STORE_PATH } from '../../constants';

import * as S from './styles';

const Checkout = () => {
  const history = useHistory();
  const { sneaker } = useContext(SneakerContext);
  const [selectedMethod, setSelectedMethod] = useState(null);

  useEffect(() => {
    const onLoadPage = () => {
      if (!sneaker?.id) {
        history.push(STORE_PATH);
      }
    };
    onLoadPage();
  }, [history, sneaker]);

  return (
    <>
      <Header title="Sneakers" hasBackButton />
      <S.Container>
        <S.ImageContainer>
          <S.ProductImage src={sneaker?.maxresURL} alt="product" />
        </S.ImageContainer>
        <S.DetailsContainer>
          <S.PurchaseDetails>
            <S.Cart>
              <S.CartTotal>Cart total</S.CartTotal>
              <S.Description>{sneaker?.description}</S.Description>
              <S.ProductDetails>
                <span>
                  x {sneaker?.quantity} {sneaker?.color} Size {sneaker?.size}
                </span>
                <span>Item #{sneaker?.id}</span>
              </S.ProductDetails>
            </S.Cart>
            <S.Delivery>
              <S.DeliveryDetails>Delivery details</S.DeliveryDetails>
              <S.Address>
                <span>John Smith</span>
                <span>Phone no: 01312428200</span>
                <span>Address: Redwood City, 2000.</span>
              </S.Address>
              <S.Cost>
                <S.CostInfo>
                  <S.TotalCost>Total Cost</S.TotalCost>
                  <S.DeliveryIncluded>Delivery included</S.DeliveryIncluded>
                </S.CostInfo>
                <S.Value>{currencyValue(sneaker?.currency, sneaker?.quantity * sneaker?.price)}</S.Value>
              </S.Cost>
            </S.Delivery>
          </S.PurchaseDetails>
          <S.Payment>
            <S.PaymentMethod>Select your payment method</S.PaymentMethod>
            <S.PaymentOption selected={selectedMethod === ONLINE_BANKING} onClick={() => setSelectedMethod(ONLINE_BANKING)}>
              Online Banking
            </S.PaymentOption>
            <S.PaymentOption selected={selectedMethod === CARD} onClick={() => setSelectedMethod(CARD)}>
              Card payment
            </S.PaymentOption>
            <S.PaymentOption selected={selectedMethod === APPLE_PAY} onClick={() => setSelectedMethod(APPLE_PAY)}>
              Apple Pay
            </S.PaymentOption>
            <S.ContainerButton>
              <S.ContinueButton>Continue</S.ContinueButton>
            </S.ContainerButton>
          </S.Payment>
        </S.DetailsContainer>
      </S.Container>
    </>
  );
};

export default Checkout;
