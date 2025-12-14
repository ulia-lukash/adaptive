import { RequestButton } from "~/components/common/RequestBtn";

export function Navbar() {
    return (
        <div className="navbar-container">
            <img className="navbar-logo-img" src="Logo.svg"></img>
            <div className="navigation-btns">
                <div className="navigation-btn">Главная</div>
                <div className="navigation-btn">Донаты</div>
                <div className="navigation-btn">В2В квоты</div>
                <div className="navigation-btn">Партнеры</div>
                <div className="navigation-btn">Проекты</div>
                <div className="navigation-btn">Контакты</div>
                <div className="navigation-btn">Сервисы</div>
            </div>
            <RequestButton />
        </div>
    )
}