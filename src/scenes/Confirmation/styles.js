import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin: 0 100px;
`;

export const ImageContainer = styled.div`
  background: ${props => (props.image ? `url(${props.image})` : 'none')};
  background-position: center;
  border-radius: 10.8766px;
  margin-right: 50px;
  min-height: 562px;
  min-width: 530px;
  background-size: 260%;
`;

export const DetailsContainer = styled.div`
  background: #f7f7f7;
  border-radius: 10.8766px;
  padding: 65px 50px;
  width: 730px;
`;

export const OrderDetails = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 85px;
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
`;
