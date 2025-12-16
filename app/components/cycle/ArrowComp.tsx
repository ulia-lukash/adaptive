export function ArrowComp(props: {title: string, caption: string}) {
    // TODO: icons
    return (
        <div className="arrow-comp__container">
            <div className="arrow"></div>
            <div className="label__container">
                <div className="title text-white font-bold">{props.title}</div>
                <div className="caption text-white">{props.caption}</div>
            </div>
        </div>
    )
}