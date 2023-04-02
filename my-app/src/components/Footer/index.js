import React from "react";


function Footer() {
    return (
        <div className="footer">
            <div className="footer-items">
                <div className="footer-info">
                    <img src="#" alt="#" />
                    <p>Компания «Султан» — снабжаем розничные магазины товарами
                        "под ключ" в Кокчетаве и Акмолинской области</p>
                    <p>Подпишись на скидки и акции</p>
                    <input placeholder="Введите ваш E-mail" />
                </div>
                <div className="footer-menu">
                    <ul>
                        <h4>
                            Меню сайта:
                        </h4>
                        <li>О компании</li>
                        <li>Доставка и оплата</li>
                        <li>Возврат</li>
                        <li>Контакты</li>
                    </ul>
                </div>
                <div className="footer-category">
                    <ul>
                        <h4>
                            Категории:
                        </h4>
                        <li>Бытовая химия</li>
                        <li>Косметика и гигиена</li>
                        <li>Товары для дома</li>
                        <li>Товары для детей и мам</li>
                        <li>Посуда</li>
                    </ul>
                </div>
                <div className="footer-download">
                    <ul>
                        <h4>
                            Скачать прайс-лист:
                        </h4>
                        <li><button className="button">Прайс-лист</button></li>
                        <li>Связь в мессенджерах:</li>
                        <li><a href="#">11</a><a href="#">22</a></li>
                    </ul>
                </div>
                <div className="footer-contacts">
                    <ul>
                        <h4>
                            Контакты:
                        </h4>
                        <li><a href="tel:+77774900091">+7 (777) 490-00-91</a></li>
                        <li>время работы: 9:00-20:00</li>
                        <li>Заказать звонок</li>
                        <li>opt.sultan@mail.ru</li>
                        <li>На связи в любое время</li>
                        <li><a href="#">33</a> <a href="">44</a></li>
                    </ul>
                </div>
            </div>

        </div>
    );
}


export default Footer;