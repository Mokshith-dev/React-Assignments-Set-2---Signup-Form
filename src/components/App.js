import React, {Component, useState} from "react";
import '../styles/App.css';

const App = () => {
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("male");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const alphaNumeric = /^[0-9a-zA-Z]+$/;
  const onChangeInName =(event) => {
    setName(event.target.value);
  }
  const onChangeInMail =(event) => {
    setEmail(event.target.value);
  }
  const onChangeInGender =(event) => {
    setGender(event.target.value);
  }
  const onChangeInPhoneNumber =(event) => {
    setPhoneNumber(event.target.value);
  }
  const onChangeInPassword =(event) => {
    setPassword(event.target.value);
  }
  const handleSubmit =() => {
    if(!name && !email && !gender && !phoneNumber && !password) {
      setError("All fields are mandatory");
      return;
    }
    if(!name ) {
      setError("Name Error");
      return;
    }
    if(!email) {
      setError("Email Error");
      return;
    }
    if(!phoneNumber) {
      setError("Phone Number Error");
      return;
    }
    if(!password) {
      setError("Password Error");
      return;
    }
    if(!name.match(alphaNumeric)) {
      setError("Name is not alphanumeric");
      return;
    }
    if(!email.includes('@')) {
      setError("Email must contain @");
      return;
    }
    if(isNaN(parseInt(phoneNumber))) {
      setError("Phone Number must contain only numbers");
      return;
    }
    if(password.length <6) {
      setError("Password must contain atleast 6 letters");
      return;
    }
    setError("");
    setUserName(email.split('@')[0]);
    
  }
  return (
    <div id="main">
    {error? <div>{error}</div> : <div>Hello ${userName}</div>}
    <input data-testid = 'name' type="string" placeholder="name" value={name} onChange={onChangeInName}/>
    <input data-testid = 'email' type="email" placeholder="email" value={email} onChange={onChangeInMail}/>
    <select value={gender} data-testid = 'gender' onChange={onChangeInGender}>
      <option value="male">male</option>
      <option value="female">female</option>
      <option value="other">other</option>
    </select>
    <input data-testid = 'phoneNumber' type="string" placeholder="Phone Number" value={phoneNumber} onChange={onChangeInPhoneNumber}/>
    <input data-testid = 'password' type='password'placeholder="password" value={password} onChange={onChangeInPassword}/>
    <button data-testid = 'submit' onClick={handleSubmit}></button>

    
    </div>
  )
}


export default App;
