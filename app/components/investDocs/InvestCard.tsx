export function InvestCard(props: {label: String, caption: String}) {
    return (
        <div className="invest-card">
            <div className="icon-circle"></div>
            <div className="invest-card__content">
                <div className="invest-card__label text-blue font-bold">{props.label}</div>
                <div className="invest-card__caption text-blue">{props.caption}</div>
            </div>
        </div>
    )
}