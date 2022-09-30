import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import './Card.scss';

const Card = ({ item }) => {
    console.log('item: ', item);
    return (
        <div className='card_container'>
            {
                item.map(elem => {
                    return (
                        <div className="card">
                            <div className="card_header">
                                <span>title {elem.title}</span>
                                <a href="#">
                                    <FontAwesomeIcon icon={faEllipsis   } />
                                </a>
                            </div>
                            
                            <div className="card_quantity">
                                <p>quantity position: 2</p>
                            </div>

                            <div className="card_content">
                                <p>item 1 {elem.title}</p>
                                <p>item 2 {elem.title}</p>
                            </div>
                            
                            <div className="card_footer">
                                <button>
                                    add new position
                                </button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Card;