import { RequestButton } from "../common/RequestBtn";
import { WhatsAppButton } from "../common/WhatsAppBtn";
import { ArrowComp } from "./ArrowComp";

export function Cycle(){
    return (
        <div className="cycle-container">
            <div className="background-circle left-circle"></div>
            <div className="background-circle right-circle"></div>
            <div className="section-label text-white">Полный цикл сопровождения проектов</div>
            <div className="cycle-content">
                <div className="arrow-row">
                    <ArrowComp title={"Идея"} caption={"Анализ концепции и потенциала"} />
                    <ArrowComp title={"Разработка"} caption={"Создание документации и моделей"} />
                </div>
                <div className="arrow-row">
                    <ArrowComp title={"Запуск"} caption={"Реализация и страрт проекта"} />
                    <ArrowComp title={"Финансирование"} caption={"Привлечение инвестиций"} />
                </div>
                <div className="content-caption">Адаптирую решения под требования инвестора, банка, государственных программ, или частного фонда на каждом этапе.</div>
            </div>
            <div className="contact-btns">
                <WhatsAppButton />
                <RequestButton />
            </div>
        </div>
    )
}