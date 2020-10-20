import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin: 0 100px;
`;

export const ImageContainer = styled.div`
  margin-right: 50px;
  max-height: 630px;
  max-width: 530px;
`;

export const ProductImage = styled.img`
  border-radius: 10.8766px;
  max-height: 630px;
  max-width: 530px;
`;

export const DetailsContainer = styled.div`
  background: #f7f7f7;
  border-radius: 10.8766px;
  padding: 35px;
  width: 730px;
`;

export const PurchaseDetails = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const Cart = styled.div``;

export const CartTotal = styled.div`
  font-family: Open Sans;
  line-height: 30px;
  font-size: 22px;
  font-style: normal;
  font-weight: normal;
  margin-bottom: 20px;
`;

export const Description = styled.div`
  font-family: Open Sans;
  line-height: 20px;
  font-size: 16px;
  font-style: normal;
  font-weight: normal;
  margin-bottom: 5px;
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
`;

export const Delivery = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DeliveryDetails = styled.div`
  font-family: Open Sans;
  font-size: 20px;
  font-style: normal;
  font-weight: normal;
  line-height: 154.6%;
  margin-bottom: 15px;
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
`;

export const Cost = styled.div`
  display: flex;
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
`;

export const PaymentMethod = styled.span`
  font-family: Open Sans;
  line-height: 30px;
  font-size: 22px;
  font-style: normal;
  font-weight: normal;
  margin-bottom: 20px;
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
`;
