import {useState} from "react";
import './style.css'
import App from "../../src/App.jsx";

const Form = () => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [errorUsername, setErrorUsername] = useState('');
    const [errorEmail, setErrorEmail] = useState('');
    const [errorPassword, setErrorPassword] = useState('');
    const [errorConfirmPassword, setErrorConfirmPassword] = useState('');

    const [userColor, setUserColor] = useState('');
    const [emailColor, setEmailColor] = useState('');
    const [passwordColor, setPasswordColor] = useState('');
    const [confirmPasswordColor, setConfirmPasswordColor] = useState('');

    const validate = (e) => {
        e.preventDefault();

        if (username.length > 8) {
            setErrorUsername('');
            setUserColor('green');
        } else {
            setErrorUsername('Username Must be 8 Letters Long!');
            setUserColor('red');
        }

        if (email.includes('@gmail')) {
            setErrorEmail('');
            setEmailColor('green');
        } else  {
            setErrorEmail('Enter a valid E-Mail Address!');
            setEmailColor('red');
        }

        if (password.length > 8) {
            setErrorPassword('');
            setPasswordColor('green');
        } else   {
            setErrorPassword('Password Must be at least 8 Letters Long!');
            setPasswordColor('red');
        }

        if (password !== '' && password === confirmPassword) {
            setErrorConfirmPassword('');
            setConfirmPasswordColor('green');
        } else  {
            setErrorConfirmPassword('Confirm Password Did Not Match Password!');
            setConfirmPasswordColor('red');
        }

    }

    return <>
            <div className='card'>
                <div className='card-image'></div>
                <form>
                    <input  type='text'
                            placeholder='Name'
                            style={{borderColor: userColor}}
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}/>
                    <p className='error'>{errorUsername}</p>

                    <input  type='text'
                            placeholder="E-Mail"
                            style={{borderColor: emailColor}}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}/>
                    <p className='error'>{errorEmail}</p>

                    <input  type='password'
                            placeholder='Password'
                            style={{borderColor: passwordColor}}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}/>
                    <p className='error'>{errorPassword}</p>

                    <input  type='password'
                            placeholder='Confirm Password'
                            style={{borderColor: confirmPasswordColor}}
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}/>
                    <p className='error'>{errorConfirmPassword}</p>

                    <button className='submit' onClick={validate}>Submit</button>
                </form>
            </div>
    </>
}

export default Form