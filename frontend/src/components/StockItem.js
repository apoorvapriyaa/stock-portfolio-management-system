import React, { useContext } from 'react'
import stockContext from '../context/stocks/stockContext'

function StockItem(props) {
    const context = useContext(stockContext)
    const { deleteStock } = context
    const { stock } = props

    return (
        <>
            <tbody>
                <tr>
                    <th scope="row">{stock.symbol}</th>
                    <td>{stock.name}</td>
                    <td>{stock.price}</td>
                    <td>{stock.quantity}</td>
                    <td>{stock.totalAmount}</td>
                    <td style={{ color: stock.predicted === "Bullish" ? "green" : "red" }}>{stock.predicted}</td>
                    <td><i className="fa-solid fa-trash-can mx-2" onClick={() => {
                        deleteStock(stock._id)
                        props.showAlert("Stock Successfully deleted!", "Success", "success")
                    }} /></td>
                </tr>
            </tbody>
        </>
    )
}

export default StockItem