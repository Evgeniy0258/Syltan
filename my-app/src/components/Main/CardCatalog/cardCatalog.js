import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../../Pages/Card";
// import { BrowserRouter as Route, Routes, Link, BrowserRouter } from 'react-router-dom';





function CardCatalog() {

    const mainSelector = useSelector(state => state.data)



    const dispatch = useDispatch()
    // const addCatalog = () => { 
    //     dispatch(ACTION_SET_DATA())

    // }

    return (
        <div > {mainSelector.map((item, index) => {
            return <div className="main-catalog">

                <ul className="main-catalog__wrapper">
                    <li className="main-catalog__img wrapper" ><p><img src="" alt="#" /></p></li>
                    <li className="main-catalog__size wrapper"><p>{item.size}</p></li>
                    <li className="main-catalog__name wrapper"><p>{item.name}</p></li>
                    <li className="main-catalog__barcode wrapper"><p>Штрихкод: {item.barcode}</p></li>
                    <li className="main-catalog__manufacturer wrapper"><p>Производитель: {item.manufacturer}</p></li>
                    <li className="main-catalog__brand wrapper"><p>Бренд: {item.brand}</p></li>
                    <li className="price wrapper"><p>{item.price}</p> </li>
                    <li className="wrapper"><button className="btn-basket "> В корзину</button></li>
                </ul>
            </div>

        })}

        </div>

    )




}


export default CardCatalog