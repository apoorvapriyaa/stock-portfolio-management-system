import React, { useState } from "react";
import stockContext from "./stockContext";

const StockState = (props) => {
    const host = "http://localhost:3001"
    const stocksInitial = []

    const [stocks, setStocks] = useState(stocksInitial)

    // fetch all stocks
    const getAllStocks = async () => {
        const response = await fetch(`${host}/api/v1/stocks`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'token': localStorage.getItem('token')
            },
            body: JSON.stringify({ token: localStorage.getItem('token') })
        })
        const json = await response.json();
        setStocks(json.stocks)
    }

    // add a stock
    const addStock = async (symbol, name, price, quantity, totalAmount) => {
        // API call
        const response = await fetch(`${host}/api/v1/stock/add`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'token': localStorage.getItem('token')
            },
            body: JSON.stringify({ token: localStorage.getItem('token'), symbol, name, price, quantity, totalAmount })
        })
        const stock = await response.json()
        setStocks(stocks.concat(stock))
    }

    // delete a stock
    const deleteStock = async (id) => {
        const response = await fetch(`${host}/api/v1/stock/remove/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'token': localStorage.getItem('token')
            },
            body: JSON.stringify({ token: localStorage.getItem('token') })
        })
        await response.json();

        const newStocks = stocks.filter((stock) => { return stock._id !== id })
        setStocks(newStocks)
    }

    return (
        <stockContext.Provider value={{ stocks, setStocks, addStock, deleteStock, getAllStocks }}>
            {props.children}
        </stockContext.Provider>
    )
}

export default StockState