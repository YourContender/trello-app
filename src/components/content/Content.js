import { useState } from 'react';
import Promo from './promo/Promo';
import DeskConstructor from './desk-constructor/DeskConstructor';
import Card from './card/Card';
import './Content.scss';
import { useEffect } from 'react';

function Content () {
    const [start, setStart] = useState(false);
    const [displayConstructor, setDisplayConstructor] = useState(false);
    const [data, setData] = useState([
        {
            title: 'create',
            task: ['example 1', 'example 2'],
            id: 1
        },
        {
            title: 'process',
            task: ['example 1', 'example 2', 'example 3'],
            id: 2
        },
        {
            title: 'done',
            task: ['example 1', 'example 2'],
            id: 3
        },
    ]);

    const hello = (id, text) => {
        console.log('attribute: ', text);
        let currentElem = data.filter(item => {
            if (item.id === id) {
                item.task = [...item.task, ...text];
            } 
            return item
        })

        return setData(currentElem);
        // return console.log('test');
    }

    console.log('1:', typeof hello);

    useEffect(() => {

    }, [data])

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
                // data && 
                    data.map(item => {
                        return (
                            <Card item={item} func={hello}/>
                        )
                    })
            }
        </div>
    )
}

export default Content;