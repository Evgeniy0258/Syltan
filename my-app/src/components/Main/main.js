import React, { useEffect } from "react";
import CardCatalog from "./CardCatalog/cardCatalog";
import { useDispatch, useSelector } from "react-redux";
import Select from "./Select/Select";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";






function Main() {
    const currentPage = useSelector(state => state.currentPage)
    const totalCount = useSelector(state => state.totalCount)
    const perPage = useSelector(state => state.perPage)
    const pages = [1, 2, 3, 4, 5]

    // useEffect(() => {
    //     dispatch(...initialData())
    // }, [currentPage])
    return (
        <div className="App">
            <div className="main-catalog">
                <div className="main-nav">
                    <h2 className="main-name">Косметика и гигиена</h2>
                    <ul className="main-links">
                        <li><a href="#">Уход
                            за телом</a></li>
                        <li><a href="#">Уход
                            за руками</a></li>
                        <li><a href="#">Уход
                            за ногами</a></li>
                        <li><a href="#">Уход
                            за лицом</a></li>
                        <li><a href="#">Уход
                            за волосами</a></li>
                        <li><a href="#">Средства
                            для загара</a></li>
                        <li><a href="#">Средства
                            для бритья</a></li>
                        <li><a href="#">Подарочные
                            наборы</a></li>
                        <li><a href="#">Гигиеническая
                            продукция</a></li>
                        <li><a href="#">Гигиена
                            полости рта</a></li>
                        <li><a href="#">Бумажная
                            продукция</a></li>
                    </ul>
                </div>
                <div>
                    <Select
                        defaultValue="Сортипровка по"

                    />
                </div>
                <div className="main-container">
                    <div className="main-filters">
                        <p className="filter-text">ПОДБОР ПО ПАРАМЕТРАМ</p>
                        <div className="main-filters__price">
                            <p className="price-text">Цена</p>
                            <input placeholder="0" />
                            <p>-</p>
                            <input placeholder="10 000" />
                        </div>
                        <div className="main-filters__manufacturer">
                            <input placeholder="Поиск" />
                            <label>
                                <input type="checkbox" />
                                Grifon
                            </label>
                            <label>
                                <input type="checkbox" />
                                Grifon
                            </label>
                            <label>
                                <input type="checkbox" />
                                Grifon
                            </label>
                            <label>
                                <input type="checkbox" />
                                Grifon
                            </label>
                            <label>
                                <input type="checkbox" />
                                Grifon
                            </label>
                            <p>показать все</p>
                        </div>
                        <div className="main-filters__type">
                            <ul className="main-links">
                                <li><a href="#">Уход
                                    за телом</a></li>
                                <li><a href="#">Уход
                                    за руками</a></li>
                                <li><a href="#">Уход
                                    за ногами</a></li>
                                <li><a href="#">Уход
                                    за лицом</a></li>
                                <li><a href="#">Уход
                                    за волосами</a></li>
                                <li><a href="#">Средства
                                    для загара</a></li>
                                <li><a href="#">Средства
                                    для бритья</a></li>
                                <li><a href="#">Подарочные
                                    наборы</a></li>
                                <li><a href="#">Гигиеническая
                                    продукция</a></li>
                                <li><a href="#">Гигиена
                                    полости рта</a></li>
                                <li><a href="#">Бумажная
                                    продукция</a></li>
                            </ul>
                        </div>
                    </div>
                    <CardCatalog />
                </div>
                <div className="pages">
                    {pages.map((page, index) => <span key={index} className={currentPage == page ? "current-page" : "page"}>{page}</span>)}
                </div>

            </div>

        </div>

    );
}

export default Main;
