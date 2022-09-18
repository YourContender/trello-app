import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseUser, faDesktop, faBoxesStacked, faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import './Header.scss';
import Button from '../buttons/Button';

const Header = () => {
    return (
        <div className="header">
            <div className="header_base">
                <div className="header_base_home">
                    <Button icon={faHouseUser}/>
                </div>

                <div className="header_base_desk">
                    <Button icon={faDesktop}/>
                    <span>Desk</span>
                </div>

                <div className="header_base_search">
                    <input type="text" placeholder="search..." />
                </div>

                <div className="header_base_logo">
                    <FontAwesomeIcon icon={faBoxesStacked} /> 
                    <span>Trello</span>
                </div>
            </div>

            <div className="header_log">
                <Button icon={faRightToBracket}/>
            </div>
        </div>
    )
}

export default Header;