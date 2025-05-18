import {useEffect} from "react";

const BasicEffect = () => {

    useEffect(() => {
        console.log("BasicEffect Component Mounted");
    }, []);

    return <>
    <h1>Basic Effect Component Mounter - Check Console to see the message</h1>
    </>
}

export default BasicEffect;