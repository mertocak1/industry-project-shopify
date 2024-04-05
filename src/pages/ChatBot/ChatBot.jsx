import header from "../../assets/images/shopifyHeader.svg";
import sideMenu from "../../assets/images/sideMenu.svg";
import botMenu from "../../assets/images/stylishBotMenu.svg";
import "./ChatBot.scss";
import SizeButton from "../../components/Button/Button";
import { useState, useEffect } from "react";
import axios from "axios";
import { api_url } from "../../api.js";
import Modal from "../../components/Modal/Modal";

export default function ChatBot() {
    const [data, setData] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [input, setInput] = useState({ question: '', answer: '' });

    useEffect(() => {
        async function fetchData() {
            try {
                const result = await axios.get(`${api_url}/prompts`);
                setData(result.data);
            } catch (error) {
                console.error("Failed to fetch data:", error);
            }
        }
        fetchData();
    }, []);

    const handleModalSubmit = async ({ question, answer }) => {
        try {
            const response = await axios.post(`${api_url}/prompts`, { question, answer });
            console.log("Submission successful", response.data);
            // Optionally, fetch the updated list of prompts to reflect the change
            // fetchData();
            setShowModal(false);
        } catch (error) {
            console.error("Failed to submit data:", error);
        }
    };

    return (
        <>
            <header className="merchant__header">
                <img
                    className="merchant__header-img"
                    src={header}
                    alt="shopify header"
                ></img>
            </header>
            <main className="merchant__main">
                <img
                    className="merchant__sideMenu"
                    src={sideMenu}
                    alt="side menu"
                ></img>
                <img
                    src={botMenu}
                    alt="stylish bot menu"
                    className="merchant__botMenu"
                />
                <article className="merchant__wrapper">
                    <h1 className="merchant__title">Product Information</h1>
                    <section className="inquiries__wrapper">
                        <h2 className="inquiries__title">Most Common Inquiries</h2>
                        <ul className="inquiries__list">
                            <li className="inquiries__item">
                                When will the Dreamweave Sweater restock?
                                <a onClick={() => setShowModal(true)} className="link">
                                    {" "}
                                    + Add to Chatbot
                                </a>
                            </li>
                            <li className="inquiries__item">
                                Are the Riley Pleated Pants on sale?
                                <a onClick={() => setShowModal(true)} className="link">
                                    {" "}
                                    + Add to Chatbot
                                </a>
                            </li>
                            <li className="inquiries__item">
                                Is the fit of Dusk Linen Shirt true to size?
                                <a onClick={() => setShowModal(true)} className="link">
                                    {" "}
                                    + Add to Chatbot
                                </a>
                            </li>
                        </ul>
                    </section>
                    <SizeButton size={"Add Chatbot Response"} style={"chatbot"} />
                </article>
                <Modal isOpen={showModal} setShowModal={setShowModal} onSubmit={handleModalSubmit}/>
            </main>
        </>
    );
}
