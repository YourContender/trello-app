import './Card.scss';

const Card = ({ titles }) => {
    return (
        <div className="card">
            <div className="card_header">
                <span>title {titles}</span>
                <p>quantity position</p>
                <a href="#">...</a>
            </div>

            <div className="card_content">
                <div className="card_content_item">
                    item {titles}
                </div>
            </div>
            
            <div className="card_footer">
                <button>
                    add new position
                </button>
            </div>
        </div>
    )
}

export default Card;