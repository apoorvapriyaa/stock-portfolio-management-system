import React, { useContext, useState } from 'react'
import stockContext from '../context/stocks/stockContext'

function AddStock(props) {
    const context = useContext(stockContext)
    const { addStock } = context
    const [stock, setStock] = useState({ symbol: "", name: "", price: "", quantity: "", totalAmount: "" })

    const add = (e) => {
        e.preventDefault()
        addStock(stock.symbol, stock.name, stock.price, stock.quantity, stock.totalAmount)
        setStock({ symbol: "", name: "", price: "", quantity: "", totalAmount: "" })
        props.showAlert("Stock Added!", "Success", "success")
        window.location.reload()
    }

    const onChange = (e) => {
        setStock({ ...stock, [e.target.name]: e.target.value })
    }

    return (
        <div className='container my-3'>
            <h1 className='display-6'>Add a Stock</h1>
            <div className="my-4"></div>
            <form className='my-3'>
                <div className="row">
                    <div className="col mb-3">
                        <label htmlFor="symbol" className="form-label">
                            Symbol
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="symbol"
                            onChange={onChange}
                            name="symbol"
                            minLength={3}
                            required
                            value={stock.symbol}
                            style={{ width: '100px' }}
                        />
                    </div>
                    <div className="col mb-3">
                        <label htmlFor="name" className="form-label">
                            Name
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            onChange={onChange}
                            name="name"
                            minLength={4}
                            required
                            value={stock.name}
                            style={{ width: '150px' }}
                        />
                    </div>
                    <div className="col mb-3">
                        <label htmlFor="price" className="form-label">
                            Price
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="price"
                            onChange={onChange}
                            name="price"
                            minLength={2}
                            required
                            value={stock.price}
                            style={{ width: '100px' }}
                        />
                    </div>
                    <div className="col mb-3">
                        <label htmlFor="quantity" className="form-label">
                            Quantity
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="quantity"
                            onChange={onChange}
                            name="quantity"
                            minLength={2}
                            required
                            value={stock.quantity}
                            style={{ width: '100px' }}
                        />
                    </div>
                    <div className="col mb-3">
                        <label htmlFor="totalAmount" className="form-label">
                            Total Amount
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="totalAmount"
                            onChange={onChange}
                            name="totalAmount"
                            minLength={1}
                            required
                            value={stock.totalAmount}
                            style={{ width: '100px' }}
                        />
                    </div>
                </div>
                <div className="text-center my-4">
                    <button disabled={stock.symbol.length < 3 || stock.name.length < 4 || stock.price.length < 1 || stock.quantity.length < 1 || stock.totalAmount.length < 1} type="submit" className="btn btn-primary" onClick={add}>
                        ADD
                    </button>
                </div>
            </form>
        </div>
    )
}

export default AddStock