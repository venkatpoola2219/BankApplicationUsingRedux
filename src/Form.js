import React, { useState } from 'react';
import { deposite, withdraw, updateMobile, updateName, addTransaction, reset } from './store';
import { useDispatch, useSelector } from 'react-redux';

export default function Form() {
  const [amount, setAmount] = useState("");
  const [fullname, setFullname] = useState("");
  const [mobilenumber, setMobilenumber] = useState("");
  const [amountError, setAmountError] = useState("");
  const [fullnameError, setFullnameError] = useState("");
  const [mobilenumberError, setMobilenumberError] = useState("");
  const dispatch = useDispatch();
  const name = useSelector((e) => e.user.fullName);

  const handleWithdraw = () => {
    if (!amount) {
      setAmountError("Required field"); // Show error if amount is empty
      return;
    }
    setAmountError(""); // Clear error
    dispatch(withdraw(amount));
    dispatch(
      addTransaction({
        timestamp: new Date().toISOString(),
        type: "debite",
        amount: amount,
      })
    );
    setAmount("");
  };

  const handleDeposit = () => {
    if (!amount) {
      setAmountError("Required field"); // Show error if amount is empty
      return;
    }
    setAmountError(""); // Clear error
    dispatch(deposite(amount));
    dispatch(
      addTransaction({
        timestamp: new Date().toISOString(),
        type: "credit",
        accountname: name,
        amount: amount,
      })
    );
    setAmount("");
  };

  const handleNameUpdate = () => {
    if (!fullname) {
      setFullnameError("Required field"); // Show error if name is empty
      return;
    }
    setFullnameError(""); // Clear error
    dispatch(updateName(fullname));
    setFullname("");
  };

  const handleMobileUpdate = () => {
    if (!mobilenumber) {
      setMobilenumberError("Required field"); // Show error if mobilenumber is empty
      return;
    }
    setMobilenumberError(""); // Clear error
    dispatch(updateMobile(mobilenumber));
    setMobilenumber("");
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <h1 className="text-center">Account Form</h1>
          <div className="col-md-6">
            <div className="form-group">
              <input
                type="number"
                placeholder="Enter Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="form-control"
              />
              {amountError && <p className="text-danger">{amountError}</p>}
            </div>
          </div>
          <button className="btn btn-danger col-md-1 mx-2" onClick={handleWithdraw}>
            Withdraw
          </button>
          <button className="btn btn-primary col-md-1" onClick={handleDeposit}>
            Deposit
          </button>
        </div>
        <div className="row mt-2">
          <div className="col-md-6">
            <div className="form-group">
              <input
                type="text"
                placeholder="Enter Fullname"
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
                className="form-control"
              />
              {fullnameError && <p className="text-danger">{fullnameError}</p>}
            </div>
          </div>
          <button className="btn btn-primary col-md-1 mx-2" onClick={handleNameUpdate}>
            Update
          </button>
        </div>
        <div className="row mt-2">
          <div className="col-md-6">
            <div className="form-group">
              <input
                type="number"
                placeholder="Enter Mobile Number"
                value={mobilenumber}
                onChange={(e) => setMobilenumber(e.target.value)}
                className="form-control"
              />
              {mobilenumberError && <p className="text-danger">{mobilenumberError}</p>}
            </div>
          </div>
          <button className="btn btn-primary col-md-1 mx-2" onClick={handleMobileUpdate}>
            Update
          </button>
        </div>
        <div className="mt-2 d-flex justify-content-center">
          <button
            className="btn btn-danger mx-2"
            onClick={() => {
              dispatch(reset());
            }}
          >
            Reset
          </button>
        </div>
      </div>
    </>
  );
}
