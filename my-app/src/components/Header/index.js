import React from "react";


function Header() {
    return (
        <div className="header">
            <div className="header-info">
                <div className="header-contacts">
                    <div className="adress">
                        {/* <img src="img/Group.svg" alt="#" /> */}
                        <h5>г. Кокчетав, ул. Ж. Ташенова 129Б</h5>
                        <p>(Рынок Восточный)</p>
                    </div>
                    <div className="email">
                        <h5>opt.sultan@mail.ru</h5>
                        <p>На связи в любое время</p>
                    </div>
                </div>
                <div className="nav-menu">
                    <ul>
                        <li><a href="" >О компании</a></li>
                        <li> <a href="" >Доставка и оплата</a></li>
                        <li> <a href="" >Возврат</a></li>
                        <li> <a href="" >Контакты</a></li>
                    </ul>
                </div>
            </div>

            <div className="header-main">
                <img src="" alt="#" />
                <button className="button"> <a href="#">Каталог</a></button>
                <input placeholder="поиск" className="input-search" />
                <div className="contacts-call">
                    <a href="tel:+77774900091"><h5>+7 (777) 490-00-91</h5></a>
                    <p>время работы: 9:00-20:00</p>
                    <a href="#"> Заказать звонок</a>
                </div>
                <button className="button"> <a href="#">Прайс-лист</a></button>

            </div>
        </div>
    );
}


export default Header;