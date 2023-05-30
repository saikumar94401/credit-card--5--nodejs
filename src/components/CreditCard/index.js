import {useState} from 'react'
import {
  AppContainer,
  CreditCardContainer,
  PaymentMethodContainer,
  CardHeading,
  HorizontalLine,
  CreditCardImage,
  CardNumber,
  CardNameText,
  CardName,
  PaymentContainer,
  PaymentHeading,
  CardNumberInput,
  CardNameInput,
} from './styledComponents'

const CreditCard = () => {
  const [cardName, setCardName] = useState('')
  const [cardNumber, setCardNumber] = useState('')

  const changeCardName = event => {
    setCardName(event.target.value)
  }

  const changeCardNumber = event => {
    setCardNumber(event.target.value)
  }

  return (
    <AppContainer>
      <CreditCardContainer>
        <CardHeading>CREDIT CARD</CardHeading>
        <HorizontalLine />
        <CreditCardImage data-testid="creditCard">
          <CardNumber>{cardNumber}</CardNumber>

          <CardNameText>CARDHOLDER NAME</CardNameText>
          <CardName>{cardName}</CardName>
        </CreditCardImage>
      </CreditCardContainer>
      <PaymentMethodContainer>
        <PaymentContainer>
          <PaymentHeading>Payment Method</PaymentHeading>
          <CardNumberInput
            type="text"
            placeholder=" Card Number"
            onChange={changeCardNumber}
          />
          <CardNameInput
            type="text"
            placeholder="Cardholder Name"
            onChange={changeCardName}
          />
        </PaymentContainer>
      </PaymentMethodContainer>
    </AppContainer>
  )
}

export default CreditCard
