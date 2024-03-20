import React, { useState } from 'react';

const UserProfile = () => { // use useState hook to update
  // state initialization
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');

  // input changes
  const handleNameChange = (e) => setName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleStreetChange = (e) => setStreet(e.target.value);
  const handleCityChange = (e) => setCity(e.target.value);
  const handleCountryChange = (e) => setCountry(e.target.value);

  // display updated profile
  const userProfile = {
    name: name,
    email: email,
    address: {
      street: street,
      city: city,
      country: country
    }
  };

  return (
    <div>
      <h2>User Profile</h2>
      <div>
        <label>Full Name: </label>
        <input type="text" value={name} onChange={handleNameChange} />
      </div>
      <div>
        <label>Email: </label>
        <input type="email" value={email} onChange={handleEmailChange} />
      </div>
      <div>
        <label>Street: </label>
        <input type="text" value={street} onChange={handleStreetChange} />
      </div>
      <div>
        <label>City: </label>
        <input type="text" value={city} onChange={handleCityChange} />
      </div>
      <div>
        <label>Country: </label>
        <input type="text" value={country} onChange={handleCountryChange} />
      </div>


      <div>
        <h3>Updated Profile</h3>
        <p>Full Name: {userProfile.name}</p>
        <p>Email: {userProfile.email}</p>
        <p>Address: {userProfile.address.street}, {userProfile.address.city}, {userProfile.address.country}</p>
      </div>
    </div>
  );
};

export default UserProfile;
