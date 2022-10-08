import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import './Card.scss';
import { useState } from 'react';

const Card = ({item, addNewTask}) => {
    const [inputText, setInputText] = useState('');

    const sendingInput = (id) => {
        setInputText('');

        addNewTask(id, [inputText]);
    }

    return ( 
        <div className='card_container'>
            {
                <div className="card">
                    <div className="card_header">
                        <span>title {item.title}</span>
                        <a href="#">
                            <FontAwesomeIcon icon={faEllipsis} />
                        </a>
                    </div>
                    
                    <div className="card_quantity">
                        <p>quantity position: {item.task.length}</p>
                    </div>

                    <div className="card_content">
                        {
                            item.task.map(el => {
                                return <p>element {el}</p>
                            })
                        }
                    </div>
                    
                    <div className="card_footer">
                        <input 
                            type="text" 
                            placeholder="enter text" 
                            value={inputText}
                            onChange={(e) => setInputText(e.target.value)}
                        />
                        <button onClick={() => sendingInput(item.id)}>
                            add 
                        </button>
                    </div>
                </div>
            }
        </div>
    )
}

export default Card;