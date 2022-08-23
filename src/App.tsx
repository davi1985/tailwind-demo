import { useState } from "react";
import { CardInfoProps } from "./@types/types";
import { Card } from "./components/Card";
import { CardInfo } from "./components/CardInfo";
import { Form } from "./components/Form";

export const App = () => {
  const [cardInfo, setCardInfo] = useState<CardInfoProps>({
    nameOnCard: "",
    cardNumber: "",
    expiry: "",
    cvv: undefined,
  });

  return (
    <Card>
      <CardInfo cardInfo={cardInfo} />

      <h1 className="font-light tracking-wide text-2xl mb2 text-gray-200">
        Update payment method
      </h1>

      <p className="text-gray-400 mb-4 text-lg">Update your card details</p>

      <Form cardInfo={cardInfo} setCardInfo={setCardInfo} />
    </Card>
  );
};
