import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import cryptoJs from "crypto-js";
import { useLocation } from "react-router";
const Payment = () => {

  const location=useLocation()
    console.log(location.state)
  let totalAmount=location.state.totalAmount;
  let transaction_uuid = uuidv4();
  let message = `total_amount=${totalAmount},transaction_uuid=${transaction_uuid},product_code=EPAYTEST`;
  var hash = cryptoJs.HmacSHA256(message,"8gBm/:&EnhH.1/q");
  var hashInBase64 = cryptoJs.enc.Base64.stringify(hash);
  
  return (
    <div className="h-svh bg-gray-100">
      <form
        action="https://rc-epay.esewa.com.np/api/epay/main/v2/form"
        method="POST"
        className="bg-white w-1/3 space-y-2 grid grid-cols-1 ms-96 px-10 py-10 pt-2"
      >
        <h1 className="text-lg font-bold text-green-500 text-center">Payment GateWay</h1>
        <label htmlFor="amount " className="inline">TotalAmount</label>
        <input
          type="text"
          id="amount"
          name="amount"
          value={totalAmount}
          required
          className="inline"
        />
        
        <input
          type="text"
          id="tax_amount"
          name="tax_amount"
          value="0"
          required
        />
        <input
          type="text"
          id="total_amount"
          name="total_amount"
          value={totalAmount}
          required
        />
        <input
          type="hidden"
          id="transaction_uuid"
          name="transaction_uuid"
          value={transaction_uuid}
          required
        />
        <input
          type="hidden"
          id="product_code"
          name="product_code"
          value="EPAYTEST"
          required
        />
        <input
          type="hidden"
          id="product_service_charge"
          name="product_service_charge"
          value="0"
          required
        />
        <input
          type="text"
          id="product_delivery_charge"
          name="product_delivery_charge"
          value="0"
          required
        />
        <input
          type="text"
          id="success_url"
          name="success_url"
          value="http://localhost:3000/success"
          required
        />
        <input
          type="text"
          id="failure_url"
          name="failure_url"
          value="http://localhost:3000/failure"
          required
        />
        <input
          type="text"
          id="signed_field_names"
          name="signed_field_names"
          value="total_amount,transaction_uuid,product_code"
          required
        />
        <input
          type="text"
          id="signature"
          name="signature"
          value={hashInBase64}
          required
          className="w-full bg-teal-400"
        />
        <input value="Submit" type="submit" className="w-36 bg-blue-500 rounded-lg text-center ml-24" />
      </form>
    </div>
  );
};

export default Payment;
