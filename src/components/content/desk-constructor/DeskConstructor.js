import { useState } from 'react';
import './DeskConstructor.scss';

function DeskConstructor ({ setData, setDisplayConstructor }) {
    const [quantity, setQuantity] = useState(0);
    const [title, setTitles] = useState('');

    const postData = (a) => {
        setDisplayConstructor(true);
        let current = title.split(', ');
        
        let array = new Array(+a).fill('').map((_, i) => ({
            title: current[i],
            task: [],
            id: current[i]
        }));

        return setData(array);
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
                    onClick={() => postData(quantity)}
                >
                    POST
                </button>
            </div>
        </div>
    )
}

export default DeskConstructor;