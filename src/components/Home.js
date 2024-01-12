import React, { useRef, useState } from 'react';
import Confetti from 'react-confetti';
import pic from "../images/gifss.gif";
import pic2 from "../images/dancingbunny.gif";
import "../components/Home.css";

function Home() {
    const noButtonRef = useRef(null);
    const yesButtonRef = useRef(null);
    const popupRef = useRef(null);

    const [showConfetti, setShowConfetti] = useState(false);
    const [showSecondImage, setShowSecondImage] = useState(false);
    const [showButtons, setShowButtons] = useState(true);
    const [showPopup, setShowPopup] = useState(false);

    const [showtext, setShowtext] = useState(false);

    const handleNoButtonHover = () => {
        const noButton = noButtonRef.current;
        noButton.style.position = "absolute";
        noButton.style.left = Math.random() * 80 + "vw";
        noButton.style.top = Math.random() * 80 + "vh";
    };

    const handleYesButtonClick = () => {
        setShowButtons(false);
        setShowConfetti(true);
        setShowSecondImage(true);
        setShowPopup(true);
        setShowtext(true);
    };

    const handlePopupClick = () => {
        setShowPopup(false);
    };

    return (
        <div className='home-container'>

            <div className='container-fluid'>
                {showtext ? (
                     <h1>yeyyyyyy !! Finally</h1>
                    
                ) : (
                    <h1>Will you come on a date with me?</h1>
                )}
            </div>
           
            <div className='container-fluid'>
                {showSecondImage ? (
                    <img src={pic2} className='img-fluid mx-auto' alt='Second Image'></img>
                ) : (
                    <img src={pic} className='img-fluid mx-auto' alt='Responsive GIF'></img>
                )}
            </div>

            {showButtons && (
                <div className="buttons">
                    <button id="no-btn" ref={noButtonRef} onMouseOver={handleNoButtonHover}>
                        No
                    </button>
                    <button id="yes-btn" ref={yesButtonRef} onClick={handleYesButtonClick}>
                        Yes
                    </button>
                </div>
            )}

            {showPopup && (
                <div>

                    <h5>Lets Fix a Date</h5>
                </div>
            )}

            {showConfetti && <Confetti />}
        </div>
    );
}

export default Home;
