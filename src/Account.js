import React from 'react'
import { useSelector } from 'react-redux'

export default function Account() {
    const data = useSelector((state) => {
        return state;
    })
    return (
        <>
            <div className='container mt-2'>
                <h1 className='text-center'>Account Details</h1>
                <div className='row'>
                    <div className='col-md-12'>
                        <table className='table table-bordered '>
                            <thead>
                                <tr>
                                    <th>Blance</th>
                                    <th>Full Name</th>
                                    <th>Mobile</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{data.user.balance}</td>
                                    <td>{data.user.fullName}</td>
                                    <td>{data.user.mobile}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className='container mt-2'>
                <h1 className='text-center'>Transaction Details</h1>
                <div className='row'>
                    <div className='col-md-12'>
                        <table className='table table-bordered '>
                            <thead>
                                <tr>
                                    <th>type</th>
                                    <th>TimeStamp</th>
                                    <th>Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.transaction && data.transaction.length > 0 ? (
                                    data.transaction.map((e, index) => (
                                        <tr key={index}>
                                            <td>{e.type}</td>
                                            <td>{e.timestamp}</td>
                                            <td>{e.amount}</td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="3" className="text-center">
                                            No transactions found.
                                        </td>
                                    </tr>
                                )}

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}
