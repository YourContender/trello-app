import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import './Content.scss';
import Promo from './promo/Promo';
import DeskConstructor from './desk-constructor/DeskConstructor';
import Card from './card/Card';

const Content = () => {
    const [start, setStart] = useState(false);
    const [data, setData] = useState([]);
    const [displayConstructor, setDisplayConstructor] = useState(false);

    return (
        <div className="content_container">
            {
                !displayConstructor && (
                    !start ? 
                        <Promo setStart={setStart}/> 
                        : 
                        <DeskConstructor
                            data={data}
                            setData={setData}
                            setDisplayConstructor={setDisplayConstructor}
                        />
                )
            }

            {
                data && 
                    data.map(item => {
                        return (
                            <Card item={item}/>
                        )
                    })
            }
        </div>
    )
}

export default Content;