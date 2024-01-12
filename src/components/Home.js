import React, { useRef } from 'react';
import pic from "../images/gifss.gif";
import "../components/Home.css";

function Home() {
    const noButtonRef = useRef(null);
    const yesButtonRef = useRef(null);
    const popupRef = useRef(null);

    const handleNoButtonHover = () => {
        const noButton = noButtonRef.current;
        noButton.style.position = "absolute";
        noButton.style.left = Math.random() * 80 + "vw";
        noButton.style.top = Math.random() * 80 + "vh";
    };

    const handleYesButtonClick = () => {
        const popup = popupRef.current;
        popup.style.display = "block";
    };

    const handlePopupClick = () => {
        const popup = popupRef.current;
        popup.style.display = "none";
    };

    return (
        <div className=''>
            <div className="container ">
                <h1>Will you come on a date with me?</h1>
                <div className='container-fluid'>
                    <img src={pic} className='img-fluid mx-auto' alt='Responsive GIF'></img>
                </div>
                <div className="buttons">
                    <button id="no-btn" ref={noButtonRef} onMouseOver={handleNoButtonHover}>
                        No
                    </button>
                    <button id="yes-btn" ref={yesButtonRef} onClick={handleYesButtonClick}>
                        Yes
                    </button>
                </div>
                <div className="popup" id="popup" ref={popupRef} onClick={handlePopupClick}>
                    <p>Aww, thank you!</p>
                </div>
            </div>
        </div>
    );
}

export default Home;
