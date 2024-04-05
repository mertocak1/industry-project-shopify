import header from "../../assets/images/shopifyHeader.svg";
import sideMenu from "../../assets/images/sideMenu.svg";
import botMenu from "../../assets/images/stylishBotMenu.svg";
import './ChatBot.scss';
import SizeButton from "../../components/Button/Button";

export default function ChatBot() {

    return (
        <>
        <header className="merchant__header">
                <img className="merchant__header-img" src={header} alt="shopify header"></img>
            </header>
        <main className="merchant__main">
            <img className="merchant__sideMenu" src={sideMenu} alt="side menu"></img>
            <img src={botMenu} alt="stylish bot menu" className="merchant__botMenu" />
            <article className="merchant__wrapper">
            <h1 className="merchant__title">Product Information</h1>
            <section className="inquiries__wrapper">
                <h2 className="inquiries__title">Most Common Inquiries</h2>
                <ul className="inquiries__list">
                    <li className="inquiries__item">When will the Stevie Sweater restock?</li>
                    <li className="inquiries__item">Are the Riley Pleated Pants on sale?</li>
                    <li className="inquiries__item">Is the fit of Dusk Linen Shirt true to size?</li>
                </ul>
            </section>
            <SizeButton />
            </article>
        </main>
        </>
    );
}