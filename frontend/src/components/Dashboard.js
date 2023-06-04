import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import stockContext from '../context/stocks/stockContext'
import StockItem from './StockItem'
import AddStock from './AddStock'

function Dashboard(props) {
    const context = useContext(stockContext)
    const { stocks, getAllStocks } = context

    let navigate = useNavigate()
    useEffect(() => {
        if (localStorage.getItem('token')) {
            getAllStocks()
        } else {
            navigate("/login")
        }
        // eslint-disable-next-line
    }, [])

    return (
        <>
            <AddStock showAlert={props.showAlert} />
            <h1 className='display-6'>Your Stocks</h1>
            <div className='container mx-2 my-3'>
                {stocks.length === 0 && "No stocks to display."}
            </div>
            {stocks.map((stock) => {
                return <StockItem key={stock._id} stock={stock} showAlert={props.showAlert} />
            })}
        </>
    )
}

export default Dashboard