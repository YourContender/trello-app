import { useState } from 'react';
import './DeskConstructor.scss';

function DeskConstructor ({ data, setData }) {
    const [quantity, setQuantity] = useState(0);
    const [titles, setTitles] = useState('');

    const postData = (a, b) => {
        return setData([...data, {'quantity: ': a, 'titles': b}])
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