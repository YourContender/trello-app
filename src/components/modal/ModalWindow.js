import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import './ModalWindow.scss';

const ModalWindow = ({ setModal }) => {
    return (
        <div className="modal">
            <div className='modal_close'>
                <button 
                    onClick={() => setModal(false)}
                >
                    <FontAwesomeIcon icon={faClose} /> 
                </button>
            </div>


            <div className="modal_form">
                <input placeholder="enter title" type="text" />
                <input placeholder="enter subtitle" type="text" />
            </div>
        </div>
    )
}

export default ModalWindow;

