import { RequestButton } from "../common/RequestBtn";
import { WhatsAppButton } from "../common/WhatsAppBtn";
import { Navbar } from "./components/Navbar";

export function Header() {
    return (
        <div className="header-container">
            <Navbar />
            <div className="title-container">
                <img src="title-logo.svg" alt="" className="title-logo" />
                <div className="title-text">Профессиональная<br></br>разработка бизнес-планов<br></br>и инвестиционных проектов</div>
                <div className="btns-row">
                    <WhatsAppButton />
                    <RequestButton />
                </div>
            </div>
        </div>
    )

}