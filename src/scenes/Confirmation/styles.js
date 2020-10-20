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

export const ImageContainer = styled.div`
  background: ${props => (props.image ? `url(${props.image})` : 'none')};
  background-position: center;
  border-radius: 10.8766px;
  margin-right: 50px;
  min-height: 562px;
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
  padding: 65px 50px;
  width: 730px;

  @media (max-width: 768px) {
    display: contents;
  }
`;

export const OrderDetails = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 85px;

  @media (max-width: 768px) {
    display: contents;
  }
`;

export const Line = styled.div`
  @media (max-width: 768px) {
    border: 1px solid #d6d6d6;
    width: 100%;
    margin-bottom: 15px;
  }
`;

export const Order = styled.div``;

export const OrderSummary = styled.div`
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

export const Payment = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    margin-top: 30px;
    width: 100%;
  }
`;

export const PaymentMethod = styled.div`
  font-family: Open Sans;
  font-size: 20px;
  font-style: normal;
  font-weight: normal;
  line-height: 154.6%;
  margin-bottom: 15px;
`;

export const SelectPaymentMethod = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  font-family: Open Sans;
  font-size: 17px;
  font-style: normal;
  font-weight: normal;
  line-height: 20px;
  margin-bottom: 15px;
`;

export const Cost = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const CostContainer = styled.div`
  display: flex;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: space-between;
    margin-bottom: 20px;
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

// font-family: Trustly Sans;
export const Value = styled.span`
  font-family: Open Sans;
  line-height: 44px;
  font-size: 50.5px;
  font-style: normal;
  font-weight: bold;
  margin-right: 40px;

  @media (max-width: 768px) {
    margin-right: 0;
  }
`;

export const PlaceOrderButton = styled.button`
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
