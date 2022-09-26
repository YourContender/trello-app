import './Promo.scss';

const Promo = ({ setStart }) => {
    return (
        <div className="promo">
            <div className="promo_title">
                <span>Hello! Welcome to Trello Application</span>
                <p>test version</p>
            </div>

            <button onClick={()=> setStart(true)}>Start</button>
        </div>
    )
}

export default Promo;