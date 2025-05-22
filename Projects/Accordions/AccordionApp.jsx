import {accordionData} from './utils/content.js';
import AccordionApp from './Accordions.jsx';

const AccordionsApp = () => {
    return <>
        <div className='accordion'>
            {accordionData.map(({title, content}) => (
                <AccordionApp title={title} content={content} />
            ))}
        </div>
    </>
}
export default AccordionsApp;