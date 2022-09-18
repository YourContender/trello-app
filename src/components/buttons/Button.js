import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Buttons.scss';

const Button = ({icon}) => {
    return (
        <button className='btn'>
            <FontAwesomeIcon icon={icon} />
        </button> 
    )
}

export default Button;