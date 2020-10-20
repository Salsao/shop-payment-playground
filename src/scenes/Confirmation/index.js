import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import Header from '../../components/Header';
import ProgressBar from '../../components/ProgressBar';
import { SneakerContext } from '../../context/Sneaker';
import { currencyValue } from '../../utils/currencyValue';
import { CHECKOUT_PATH, CONFIRMATION_PATH, STEP_RECEIPT, STORE_PATH } from '../../constants';

import greenBank from '../../assets/icons/green-bank.svg';
import * as S from './styles';

const Confirmation = () => {
  const history = useHistory();
  const { sneaker } = useContext(SneakerContext);

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

  return (
    <>
      <Header title="Review and Confirmation" hasBackButton handleBackButton={() => history.push(CHECKOUT_PATH)} />
      <ProgressBar step={STEP_RECEIPT} />
      <S.Container>
        <S.ImageContainer image={sneaker?.maxresURL} />
        <S.DetailsContainer>
          <S.OrderDetails>
            <S.Order>
              <S.OrderSummary>Order summary</S.OrderSummary>
              <S.Description>{sneaker?.description}</S.Description>
              <S.ProductDetails>
                <span>
                  x {sneaker?.quantity} {sneaker?.color} Size {sneaker?.size}
                </span>
                <span>Item #{sneaker?.id}</span>
              </S.ProductDetails>
            </S.Order>
            <S.Payment>
              <S.PaymentMethod>Payment Method</S.PaymentMethod>
              <S.SelectPaymentMethod>
                <img src={greenBank} alt="bank" />
                Online Banking
              </S.SelectPaymentMethod>
            </S.Payment>
            <div />
          </S.OrderDetails>
          <S.Cost>
            <S.CostInfo>
              <S.TotalCost>Total Cost</S.TotalCost>
              <S.DeliveryIncluded>Delivery included</S.DeliveryIncluded>
            </S.CostInfo>
            <S.Value>{currencyValue(sneaker?.currency, sneaker?.quantity * sneaker?.price)}</S.Value>
            <S.PlaceOrderButton>Place order</S.PlaceOrderButton>
          </S.Cost>
        </S.DetailsContainer>
      </S.Container>
    </>
  );
};

export default Confirmation;
