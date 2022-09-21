import './Desk.scss';

function Desk({ desk }) {
    return (
        <div className="desk_container">
            {
                desk.map(item => {
                    return (
                        <div className="testing">
                            <div className="desk">
                                <span>{item}</span>
                                <br/>punkt 1
                                <br/>punkt 2
                                <br/>punkt 3
                            </div>
                            <div className="desk">
                                <span>{item}</span>
                                <br/>punkt 1
                                <br/>punkt 2
                                <br/>punkt 3
                            </div>
                            <button>
                                add
                            </button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Desk;