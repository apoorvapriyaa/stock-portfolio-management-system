import React, { useContext, useState } from 'react'
import stockContext from '../context/stocks/stockContext'

function AddStock(props) {
    const context = useContext(stockContext)
    const { addStock } = context
    const [stock, setStock] = useState({ symbol: "", name: "", buy_price: "", curr_price: "", qty: "" })

    const add = (e) => {
        e.preventDefault()
        addStock(stock.symbol, stock.name, stock.buy_price, stock.curr_price, stock.qty)
        setStock({ symbol: "", name: "", buy_price: "", curr_price: "", qty: "" })
        props.showAlert("Stock Added!", "Success", "success")
    }

    const onChange = (e) => {
        setStock({ ...stock, [e.target.name]: e.target.value })
    }

    return (
        <div className='container my-3'>
            <h1 className='display-6'>Add a Stock</h1>
            <form className='my-3'>
                <div className="mb-3">
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
                    />
                </div>
                <div className="mb-3">
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
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="buy_price" className="form-label">
                        Buy Price
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="buy_price"
                        onChange={onChange}
                        name="buy_price"
                        minLength={2}
                        required
                        value={stock.buy_price}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="curr_price" className="form-label">
                        Current Price
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="curr_price"
                        onChange={onChange}
                        name="curr_price"
                        minLength={2}
                        required
                        value={stock.curr_price}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="qty" className="form-label">
                        Quantity
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="qty"
                        onChange={onChange}
                        name="qty"
                        minLength={1}
                        required
                        value={stock.qty}
                    />
                </div>
                <button disabled={stock.symbol.length < 3 || stock.name.length < 4 || stock.buy_price.length < 2 || stock.curr_price.length < 2 || stock.qty.length < 1} type="submit" className="btn btn-primary" onClick={add}>
                    ADD
                </button>
            </form>
        </div>
    )
}

export default AddStock