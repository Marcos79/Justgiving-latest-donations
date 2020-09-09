import React from "react";


const NewDonation = () => {
  return (
    <div>
      <p className="donate">
        <input
          type="text"
          inputMode="decimal"
          pattern="[0-9]*"
          placeholder="insert amount"
        />
        <button className="donationButton">Donate</button>
        
      </p>
    </div>
  );
};

export default NewDonation;
