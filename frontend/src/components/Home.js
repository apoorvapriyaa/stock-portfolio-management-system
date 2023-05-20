import React, { useRef, useState } from 'react'
import './css/addbutton.css'

function Home() {
    const [stock, setStock] = useState({ name: "", buy_price: "", curr_price: "", qty: "" })
    const ref = useRef(null)
    const addStock = (currStock) => {
        ref.current.click()
    }
    const handleClick = (e) => {
        e.preventDefault()
    }

    const onChange = (e) => {
        setStock({ ...stock, [e.target.name]: e.target.value })
    }
    return (
        <div className='container'>
            <br />
            <br />
            <br />
            <button className="add" role="button" onClick={() => { addStock(stock) }}>
                ADD
            </button>
            <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Add a Stock</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form className="my-3">
                                <div className="mb-3">
                                    <label htmlFor="logo" className="form-label">Logo</label>
                                    <input type="file" id="logo" name="logo" accept="image/*" className="form-control" value={stock.logo} onChange={onChange} aria-describedby="emailHelp" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Stock Name</label>
                                    <input type="text" className="form-control" id="name" name="name" value={stock.name} onChange={onChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="buy_price" className="form-label">Buy Price</label>
                                    <input type="text" className="form-control" id="buy_price" name="buy_price" value={stock.buy_price} onChange={onChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="curr_price" className="form-label">Current Price</label>
                                    <input type="text" className="form-control" id="curr_price" name="curr_price" value={stock.curr_price} onChange={onChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="qty" className="form-label">Quantity</label>
                                    <input type="text" className="form-control" id="qty" name="qty" value={stock.qty} onChange={onChange} />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={handleClick}>Update Stock</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home