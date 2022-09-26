import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import './Content.scss';
import Promo from './promo/Promo';
import DeskConstructor from './desk-constructor/DeskConstructor';

const Content = () => {
    const [start, setStart] = useState(false);
    const [data, setData] = useState([]);

    return (
        <div className="content_container">
            {
                !start ? 
                    <Promo setStart={ setStart }/> : 
                    <DeskConstructor
                        data={data}
                        setData={setData}
                    />
            }

            {
                data && 
                    data.map(item => {
                        return (
                            <div>
                                <span>test 1 {item.quantity}</span>
                                <span>test 2 {item.titles}</span>
                            </div>
                        )
                    })
            }
        </div>
    )
}

export default Content;