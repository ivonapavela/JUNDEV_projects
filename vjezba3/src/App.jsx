import PersonalData from "./personalData";
import PaymentData from "./paymentData";
import InformationData from "./informationData";
import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

function App() {
  const [currentComponent, setCurrentComponent] = useState(0);
  const [personalData, setPersonalData] = useState(null);
  const [paymentData, setPaymentData] = useState(null);
  

  const handlePersonalDataSubmit = (personalData) => {
    setPersonalData(personalData);
    console.log(personalData);
    handleNext();
  };

  const handlePaymentDataSubmit = (paymentData) => {
    setPaymentData(paymentData);
    console.log(paymentData);
    handleNext();
  };

  const handleNext = () => {
    setCurrentComponent((prevComponent) => prevComponent + 1);
  };

  const renderComponent = () => {
    switch (currentComponent) {
      case 0:
        return <PersonalData onSubmit={handlePersonalDataSubmit} />;
      case 1:
        return <PaymentData onSubmit={handlePaymentDataSubmit}/>;
      case 2:
        return <InformationData personalData={personalData} paymentData={paymentData}/>;
      default:
        return null;
    }
  };

  return (
    <>
      {renderComponent()}
    </>
  );
}

export default App;
