import { FaBeer } from "react-icons/fa";

const IconComponent = () => {

    return <>
            <div>
                < FaBeer />
                < FaBeer size={100} />
                < FaBeer size={150} color="gold"/>
            </div>
           </>
}

export default IconComponent;