import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import ModalWindow from '../modal/ModalWindow';
import './Content.scss';

const Content = () => {
    const [modal, setModal] = useState(false);
    const [desk, setDesk] = useState(['hello', 'world']);

    const testFunc = () => {
        return setDesk([...desk, 'new item'])
    }

    return (
        <div className="content_container">
            <div className="content_items">
                {
                    desk.map(item => {
                        return (
                            <div className="content_item">
                                {item}
                            </div>
                        )
                    })
                }
            </div>

            <div 
                className="content_add"
                onClick={() => testFunc()}
            >
                <FontAwesomeIcon icon={faPlus} /> 
                <span>Add new desk</span> 
            </div> 

            {/* {modal && <ModalWindow setModal={setModal}/>} */}
        </div>
    )
}

export default Content;