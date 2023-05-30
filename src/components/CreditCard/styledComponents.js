import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  margin: 0;
  height: 100vh;
`

export const CreditCardContainer = styled.div`
  width: 30%;
  background-color: #3b4b69;
  height: 100vh;
  padding: 40px;
`

export const PaymentMethodContainer = styled.div`
  width: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  box-shadow: 0px 2px 15px 1px black;
`

export const CardHeading = styled.h1`
  color: white;
  text-align: center;
`
export const HorizontalLine = styled.hr`
  width: 40%;
  color: #ffd773;
  height: 3px;
  background-color: #ffd773;
`
export const CreditCardImage = styled.div`
  background-image: url('
https://assets.ccbp.in/frontend/hooks/credit-card-bg.png');
  height: 230px;
  margin-top: 200px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  position: relative;
`
export const CardNumber = styled.p`
  color: white;
  top: 70px;
  position: absolute;
  font-size:40px

  padding: 0;
`
export const CardNameText = styled.p`
  color: white;
  top: 130px;
  position: absolute;
  color: #d3d9e0;
`

export const CardName = styled.p`
  color: white;
  margin: 0;
  padding: 0;
  top: 170px;
  position: absolute;
`
export const PaymentContainer = styled.div`
  height: 100px;
  display: flex;
  flex-direction: column;
`
export const PaymentHeading = styled.h1`
  color: #344e7a;
`
export const CardNumberInput = styled.input`
  border: 1px solid #d3d9e0;
  color: #475569;
  margin-bottom: 10px;
  padding: 5px;
  outline: none;
`

export const CardNameInput = styled.input`
  border: 1px solid #d3d9e0;
  color: #475569;
  padding: 5px;
  outline: none;
`
