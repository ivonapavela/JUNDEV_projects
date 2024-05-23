import React, { useState } from "react";
import "./data.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle, faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function PaymentData({ onSubmit }) {
    const [cardNumber, setCardNumber] = useState('');
    const [expireMonth, setExpireMonth] = useState('');
    const [expireYear, setExpireYear] = useState('');
    const [cardHolder, setCardHolder] = useState('');
    const [cvv, setCvv] = useState('');
    const [errorCardNumber, setErrorCardNumber] = useState('');
    const [errorCvv, setErrorCvv] = useState('');
    const [errorCardHolder, setErrorCardHolder] = useState('');
    const [errorDate, setErrorDate] = useState('');


    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: 15 }, (_, index) => currentYear + index);

    const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];


    const handleSubmit = (e) => {
      e.preventDefault();
  
      const cardNumberRegex = /^[0-9]+$/;
      const cvvRegex = /^[0-9]{3,4}$/;
      const cardHolderRegex = /^[a-zA-Z]+$/;
  
      if (!cardNumber.match(cardNumberRegex)) {
          setErrorCardNumber("Card number should contain only numbers.");
          setErrorCvv(''); 
          setErrorDate('');
          setErrorCardHolder(''); 
          return;
      }

      if (!cardHolder.match(cardHolderRegex)) {
        setErrorCardHolder("Card holder should contain only letters.");
        setErrorCardNumber(''); 
        setErrorCvv(''); 
        setErrorDate('');
        return;
    }
  
      if (!cvv.match(cvvRegex)) {
          setErrorCvv("CVV should contain only numbers and be 3 or 4 digits long.");
          setErrorCardNumber(''); 
          setErrorCardHolder(''); 
          setErrorDate('');
          return;
      }

      const currentYear = new Date().getFullYear();
      const currentMonth = new Date().getMonth() + 1;

      if (parseInt(expireYear) === currentYear && parseInt(expireMonth) < currentMonth) {
        setErrorDate("Expiration date is not valid.");
        setErrorCvv('');
        setErrorCardNumber(''); 
        setErrorCardHolder(''); 
        return;
     }

  
      onSubmit({ cardNumber, expireMonth, expireYear, cardHolder, cvv });
      setErrorCardNumber('');
      setErrorCvv('');
      setErrorCardHolder('');
  }
  

    return (
        <div className= "card">
            <form onSubmit={handleSubmit}>
                <div className="input">
                    <label htmlFor="cardNumber">Card Number</label>
                    <input
                        type="text"
                        id="cardNumber"
                        value={cardNumber}
                        onChange={(e) => { setCardNumber(e.target.value) }}
                        required
                    ></input>
                </div>
                {errorCardNumber && <div className="alert"><FontAwesomeIcon className = "icon" icon={faExclamationCircle} />{errorCardNumber}</div>}
                <div className="date">
                    <label htmlFor="expireDate">Expire Date</label>
                    <div className="select-date">
                        <select
                            required
                            id="expireDate"
                            value={expireMonth}
                            onChange={(e) => { setExpireMonth(e.target.value) }}>
                              <option value="">Month</option>
                            {months.map(month => (<option key={month} value={month}>{month}</option>))}
                        </select>
                        <div>/</div>
                        <select
                            required
                            id="expireYear"
                            value={expireYear}
                            onChange={(e) => { setExpireYear(e.target.value) }}>
                              <option value="">Year</option>
                            {years.map(year => (<option key={year} value={year}>{year}</option>))}
                        </select>
                    </div>
                </div>
                {errorDate && <div className="alert"><FontAwesomeIcon className = "icon" icon={faExclamationCircle} />{errorDate}</div>}
                <div className="input">
                    <label htmlFor="cardHolder">Card Holder</label>
                    <input
                        type="text"
                        id="cardHolder"
                        value={cardHolder}
                        onChange={(e) => { setCardHolder(e.target.value) }}
                        required
                    ></input>
                </div>
                {errorCardHolder && <div className="alert"><FontAwesomeIcon className = "icon" icon={faExclamationCircle} />{errorCardHolder}</div>}
                <div className="input">
                    <label htmlFor="cvv">CVV</label>
                    <input
                        type="text"
                        id="cvv"
                        value={cvv}
                        onChange={(e) => { setCvv(e.target.value) }}
                        required
                    ></input>
                </div>
                {errorCvv && <div className="alert"><FontAwesomeIcon className = "icon" icon={faExclamationCircle} />{errorCvv}</div>}
                <div className = "button"><button type="submit"><FontAwesomeIcon icon={faArrowRight} /></button></div>
            </form>
        </div>
    )
}
