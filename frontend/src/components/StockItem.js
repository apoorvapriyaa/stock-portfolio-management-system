import React, { useContext } from 'react'
import stockContext from '../context/stocks/stockContext'

function StockItem(props) {
    const context = useContext(stockContext)
    const { deleteStock } = context
    const { stock } = props

    return (
        <>
            <table>
                <tbody>
                    <tr>
                        <th scope="row">{stock.symbol}</th>
                        <td>{stock.name}</td>
                        <td>{stock.buy_price}</td>
                        <td>{stock.curr_price}</td>
                        <td>{stock.qty}</td>
                        <td><i className="fa-solid fa-trash-can mx-2" onClick={() => {
                            deleteStock(stock._id)
                            props.showAlert("Stock Successfully deleted!", "Success", "success")
                        }} /></td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default StockItem