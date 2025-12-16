import { InvestCard } from "./InvestCard";

export function InvestDocs() {
    return (
        <div className="invest-docs__container">
            <div className="section-label text-blue">Разработка инвистиционных документов</div>
            <div className="cards-container">
                <InvestCard label={'Бизнес-план'} caption={'Полное описание проекта, включая анализ рынка, производственную программу, организационную структуру, финансовые прогнозы и оценку эффективности'} />
                <InvestCard label={'ТЭО / ФЭО'} caption={'Расчет инвестиционных и эксплуатационных затрат, анализ рисков, экономическая и социальная эффективность, окупаемость'} />
                <InvestCard label={'Финансовая модель'} caption={'Excel-инструмент с расчетами выручки, затрат, прибыли, денежных потоков (Cash Flow), IRR, NPV, PI, τочки безубыточности'} />
                <InvestCard label={'Инвестиционный тизер'} caption={'Краткое и визуально структурированное представление проекта для инвесторов, банков и госорганов'} />
            </div>
        </div>
    )
}