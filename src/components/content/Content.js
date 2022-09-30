import { useState } from 'react';
import Promo from './promo/Promo';
import DeskConstructor from './desk-constructor/DeskConstructor';
import Card from './card/Card';
import './Content.scss';

const Content = () => {
    const [start, setStart] = useState(false);
    const [data, setData] = useState([
        [{
            title: 'test'
        }]
    ]);
    const [displayConstructor, setDisplayConstructor] = useState(false);

    return (
        <div className="content_container">
            {/* {
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
            } */}

            {
                data && 
                    data.map(item => {
                        return (
                            <div>
                                <Card item={item}/>
                            </div>
                        )
                    })
            }
        </div>
    )
}

export default Content;