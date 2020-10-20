import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import Header from '../../components/Header';
import ProgressBar from '../../components/ProgressBar';
import { SneakerContext } from '../../context/Sneaker';
import { currencyValue } from '../../utils/currencyValue';
import { APPLE_PAY, CARD, CONFIRMATION_PATH, ONLINE_BANKING, STEP_PAYMENT, STORE_PATH } from '../../constants';

import onlinePayment from '../../assets/icons/online-payment.svg';
import cardPayment from '../../assets/icons/card-payment.svg';
import applePayment from '../../assets/icons/apple-payment.svg';
import * as S from './styles';

const Checkout = () => {
  const history = useHistory();
  const { sneaker } = useContext(SneakerContext);
  const [selectedMethod, setSelectedMethod] = useState(null);

  // eslint-disable-next-line consistent-return
  window.PayWithMyBank.addPanelListener((command, event) => {
    if (command === 'event' && event.type === 'new_location') {
      if (event.data.indexOf('#success') === 0) {
        history.push(CONFIRMATION_PATH);
      } else {
        // eslint-disable-next-line no-alert
        alert('cancel!');
      }
      return false;
    }
  });

  useEffect(() => {
    const onLoadPage = () => {
      if (!sneaker?.id) {
        history.push(STORE_PATH);
      }
    };
    onLoadPage();
  }, [history, sneaker]);

  const handlePay = () => {
    if (selectedMethod === ONLINE_BANKING) {
      window.PayWithMyBank.establish({
        accessId: 'D61EC9BAF0BB369B9438',
        merchantId: '1004314986',
        metadata: { demo: 'enabled' },
        currency: 'USD',
        paymentType: 'Deferred',
        amount: (sneaker?.quantity * sneaker?.price).toFixed(2).toString(),
        description: 'eduardosarapereira@gmail.com',
        merchantReference: '121212',
        returnUrl: '#success',
        cancelUrl: '#cancel'
      });
    }
  };

  return (
    <>
      <Header title="Sneakers" hasBackButton handleBackButton={() => history.push(STORE_PATH)} />
      <ProgressBar step={STEP_PAYMENT} />
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
              <S.Discount>Save $10</S.Discount>
              <span>Online Banking</span>
              <img src={onlinePayment} alt="online" />
            </S.PaymentOption>
            <S.PaymentOption selected={selectedMethod === CARD} onClick={() => setSelectedMethod(CARD)}>
              <span>Card payment</span>
              <img src={cardPayment} alt="card" />
            </S.PaymentOption>
            <S.PaymentOption selected={selectedMethod === APPLE_PAY} onClick={() => setSelectedMethod(APPLE_PAY)}>
              <span>Apple Pay</span>
              <img src={applePayment} alt="apple" />
            </S.PaymentOption>
            <S.ContainerButton>
              <S.ContinueButton onClick={handlePay}>Continue</S.ContinueButton>
            </S.ContainerButton>
          </S.Payment>
        </S.DetailsContainer>
      </S.Container>
    </>
  );
};

export default Checkout;
