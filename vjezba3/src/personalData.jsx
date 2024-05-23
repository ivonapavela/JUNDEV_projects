import React, {useState} from "react";
import "./data.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


export default function PersonalData({onSubmit}) {

    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');

    const handleSubmit = (e) => {
      e.preventDefault();
      
      if(email && address && city && country) {
        onSubmit({email, address, city, country});
      }
    }

    return (
        <div className = "card">
            <form onSubmit={handleSubmit}>
              <div className = "input">
                <label htmlFor = "email">E-mail</label>
                <input 
                        type = "email"
                        id = "email"
                        value = {email}
                        onChange = {(e) => setEmail(e.target.value)}
                        required 
                />
              </div>
              <div className = "input">
                <label htmlFor = "address">Address</label>
                <input 
                        type = "text"
                        id = "address"
                        value = {address}
                        onChange = {(e) => setAddress(e.target.value)}
                        required 
                />
              </div>
              <div className = "input">
                <label htmlFor = "city">City</label>
                <input 
                        type = "text"
                        id = "city"
                        value = {city}
                        onChange = {(e) => setCity(e.target.value)}
                        required 
                />
              </div>
              <div className = "input">
                <label htmlFor = "country">Country</label>
                <input 
                        type = "text"
                        id = "country"
                        value = {country}
                        onChange = {(e) => setCountry(e.target.value)}
                        required 
                />
              </div>
              <div className = "button"><button type="submit"><FontAwesomeIcon icon={faArrowRight} /></button></div>
            </form>
        </div>
    )
}