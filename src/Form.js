import React, { useState } from 'react'
import { deposite,withdraw,updateMobile,updateName,addTransaction,reset} from './store';
import { useDispatch, useSelector } from 'react-redux';

export default function Form() {
    const[amount,setAmount]=useState();
    const[fullname,setFullname]=useState();
    const[mobilenumber,setMobilenumber]=useState();
    const dispatch=useDispatch()
    const name=useSelector((e)=>e.user.fullName)
  return (
    <>
    <div className='container'>
        <div className="row">
            <h1 className='text-center'>Account Form</h1>
            <div className="col-md-6">
                <div className="form-group">
                    <input type="number" placeholder='Enter Amount' value={amount} onChange={(e)=>setAmount(e.target.value)} className="form-control" />
                </div>
            </div>
            <button className='btn btn-danger col-md-1 mx-2' onClick={()=>{dispatch(withdraw(amount));
                dispatch(addTransaction({
                    timestamp:new Date().toISOString(),
                    type:"debite",
                    amount:amount
                }));
                
                setAmount("")}}>Withdraw</button>
            <button className='btn btn-primary col-md-1' onClick={()=>{dispatch(deposite(amount));

                dispatch(addTransaction({
                    timestamp:new Date().toISOString(),
                    type:"credit",
                    accountname:name,
                    amount:amount
                }));
                setAmount("")}}>Deposit</button>
        </div>
        <div className="row mt-2">
            <div className="col-md-6">
                <div className="form-group">
                    <input type="type" placeholder='Enter Fullname' value={fullname} onChange={(e)=>setFullname(e.target.value)} className="form-control" />
                </div>
            </div>
            <button className='btn btn-primary col-md-1 mx-2' onClick={()=>{dispatch(updateName(fullname)); setFullname("")}}>Updater</button>
        </div>
        <div className="row mt-2">
            <div className="col-md-6">
                <div className="form-group">
                    <input type="number" placeholder='Enter Mobile Number' value={mobilenumber} onChange={(e)=>setMobilenumber(e.target.value)} className="form-control" />
                </div>
            </div>
            <button className='btn btn-primary col-md-1 mx-2' onClick={()=>{dispatch(updateMobile(mobilenumber)); setMobilenumber("")}}>Updater</button>
        </div>
        <div className='mt-2 d-flex justify-content-center'>
        <button className='btn btn-danger mx-2' onClick={
            ()=>{dispatch(reset());
            }}>Reset</button>
        </div>
    </div>
    </>
  )
}
