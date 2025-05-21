import {useState} from "react";
import './style.css'

const ToggleBGColor = () => {

    const [backgroundColour, setBackgroundColour] = useState('white');
    const [textColor, setTextColor] = useState('#1b1b1b');
    const [buttonStyle, setButtonStyle] = useState('white');

    const handleClick = () => {
        setBackgroundColour(backgroundColour === 'white' ? '#1b1b1b' : 'white');
        setTextColor(textColor === '#1b1b1b' ? '#ffa31a' : '#1b1b1b');
        setButtonStyle(backgroundColour === 'white' ? '#1b1b1b' : 'white');
    }


    return <div style={{backgroundColor: backgroundColour, color: textColor}}>
            <button onClick={handleClick}
                    style={{buttonStyle,
                            color: textColor,
                            border: `2px solid ${textColor}`}}
            >
        { backgroundColour === '#1b1b1b' ? "Black Theme"  : "White Theme" }
            </button>
            <section className='content'>
                <h1>Welcome to A <br/>
                    Real World...
                </h1>
            </section>
    </div>
}

export default ToggleBGColor;