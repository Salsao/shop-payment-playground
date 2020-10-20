import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin: 0 100px;

  @media (max-width: 768px) {
    margin: 0 40px;
    background-color: #f7f7f7;
    padding: 15px;
    flex-wrap: wrap;
    justify-content: space-around;
  }
`;

export const CheckoutMobile = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 23.9328px;
    line-height: 33px;
    margin: 0 40px 5px 40px;
  }
`;

// background-size: cover;
export const ImageContainer = styled.div`
  background: ${props => (props.image ? `url(${props.image})` : 'none')};
  background-position: center;
  border-radius: 10.8766px;
  margin-right: 50px;
  min-height: 630px;
  min-width: 530px;
  background-size: 260%;

  @media (max-width: 768px) {
    min-height: 130px;
    min-width: 100px;
    height: 130px;
    background-size: 300%;
  }
`;

export const DetailsContainer = styled.div`
  background: #f7f7f7;
  border-radius: 10.8766px;
  padding: 35px;
  width: 730px;

  @media (max-width: 768px) {
    display: contents;
  }
`;

export const PurchaseDetails = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    display: contents;
  }
`;

export const Cart = styled.div`
  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

export const CartTotal = styled.div`
  font-family: Open Sans;
  line-height: 30px;
  font-size: 22px;
  font-style: normal;
  font-weight: normal;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Description = styled.div`
  font-family: Open Sans;
  line-height: 20px;
  font-size: 16px;
  font-style: normal;
  font-weight: normal;
  margin-bottom: 5px;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

export const ProductDetails = styled.div`
  color: #a5a5a5;
  display: flex;
  flex-direction: column;
  font-family: Open Sans;
  line-height: 25px;
  font-size: 16px;
  font-style: normal;
  font-weight: normal;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const Delivery = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const DeliveryDetails = styled.div`
  font-family: Open Sans;
  font-size: 20px;
  font-style: normal;
  font-weight: normal;
  line-height: 154.6%;
  margin-bottom: 15px;

  @media (max-width: 768px) {
    font-size: 13px;
    margin-bottom: 5px;
  }
`;

export const Address = styled.div`
  color: #979797;
  display: flex;
  flex-direction: column;
  font-family: Open Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: normal;
  letter-spacing: 0.612903px;
  line-height: 153.3%;
  margin-bottom: 15px;

  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

export const Cost = styled.div`
  display: flex;

  @media (max-width: 768px) {
    justify-content: space-between;
  }
`;

export const CostInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 35px;
`;

export const TotalCost = styled.span`
  font-family: Open Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: normal;
  line-height: 20px;
`;

export const DeliveryIncluded = styled.span`
  color: #a5a5a5;
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
`;

export const Value = styled.span`
  font-family: Open Sans;
  font-size: 43.5063px;
  font-style: normal;
  font-weight: normal;
  line-height: 44px;
`;

export const Payment = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const PaymentMobile = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 16.9328px;
    line-height: 23px;
    margin-top: 40px;
    margin-bottom: 10px;
    width: 100%;
  }
`;

export const PaymentMethod = styled.span`
  font-family: Open Sans;
  line-height: 30px;
  font-size: 22px;
  font-style: normal;
  font-weight: normal;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Discount = styled.div`
  align-items: center;
  color: #9e7d27;
  background-color: #ffcc00;
  border-radius: 2.079px;
  bottom: 62px;
  display: flex;
  font-family: Open Sans;
  font-size: 9.77px;
  font-style: normal;
  font-weight: bold;
  height: 18px;
  justify-content: center;
  line-height: 13px;
  position: absolute;
  text-align: center;
  width: 76px;
`;

export const PaymentOption = styled.button`
  align-items: center;
  background: #ffffff;
  border: ${props => (props.selected ? '1px solid #5DAC50' : 'none')};
  border-radius: 10.8766px;
  color: #a5a5a5;
  display: flex;
  font-family: Open Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: normal;
  line-height: 22px;
  height: 72px;
  justify-content: space-between;
  margin-bottom: 20px;
  padding: 24px;
  position: relative;

  &:hover {
    cursor: pointer;
  }
`;

export const ContainerButton = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;

export const ContinueButton = styled.button`
  background: #6b8067;
  border: none;
  border-radius: 5px;
  color: #ffffff;
  font-family: Open Sans;
  font-size: 14px;
  font-style: normal;
  font-weight: bold;
  height: 41px;
  line-height: 19px;
  text-align: center;
  width: 302px;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;
