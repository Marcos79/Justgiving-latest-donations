import React, { useState, useEffect } from "react";
import "./App.scss";
import axios from "axios";

const CharityDonation = () => {
  const [donations, setDonations] = useState([]);

  const formatCurrency = (amount) => {
    if (amount) {
      return "£" + amount.toFixed(2);
    } else {
      return "";
    }
  };

  useEffect(() => {

    axios
      .get(`https://api.justgiving.com/b41c1e29/v1/charity/2116/donations`, {
        headers: { Accept: "application/json" },
      })
      .then((res) => {
        const donations = res.data.donations.map((donation) => ({
          ...donation,
          id: Math.random() * 100000,
        }));

        setDonations(donations);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);


  return (
    <div>
      {donations.map((donation) => (
        <div key={donation.id} className="donation">
          <img
            className="donationAvatar"
            src={donation.imageUrl}
            alt="imagine"
          ></img>
          <div className="donationContents">
            <p className="donorName">{donation.donorDisplayName}</p>
            <p className="donorAmount">{formatCurrency(donation.amount)}</p>
            <p className="donorDescription">{donation.message}</p>
          </div>
        </div>
      ))}
      ;
    </div>
  );
};

export default CharityDonation;
