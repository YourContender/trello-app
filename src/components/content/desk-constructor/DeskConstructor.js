import { useState } from 'react';
import './DeskConstructor.scss';

function DeskConstructor ({ data, setData, setDisplayConstructor }) {
    const [quantity, setQuantity] = useState(0);
    const [titles, setTitles] = useState('');

    const postData = (a, b) => {
        setDisplayConstructor(true);
        let title = b.split(', ');
        
        let array = new Array(+a).fill('').map((_, i) => ({title: title[i]}));
        console.log('array: ', array);

        return setData([...data, ...array])
    }

    return (
        <div className="constructor">
            <div className="constructor_forms">
                <input 
                    type="text" 
                    placeholder="введіть кількість карток" 
                    onChange={(e) => setQuantity(e.target.value)} 
                />
                
                <input 
                    type="text" 
                    placeholder="введіть заголовки до них через кому" 
                    onChange={(e) => setTitles(e.target.value)}
                />

                <button
                    onClick={() => postData(quantity, titles)}
                >
                    POST
                </button>
            </div>
        </div>
    )
}

export default DeskConstructor;