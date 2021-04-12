import ProfilPhoto from './Profile/ProfilPhoto'
import Data from './Profile/Data';
import Slider from './animations/Slider'
const CardUser = (props) => {

    const cardStyle = {
        boxShadow : '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        height : '220px',
        width: '250px',
        backgroundColor : 'white',
    };

    const iconStyle = {
        textAlign : 'center',
        display : 'block', 
        transform: 'rotate(45deg)', 
        color :'#52a4b9'
    }

    return (
        <Slider>
            <div style = {cardStyle}> 
                <i className ="fa fa-thumb-tack fa-lg" style = {iconStyle}></i>
                <ProfilPhoto  img = {props.items.img}/>
                <Data address = {props.items.Address} name = {props.items.name}  />
            </div>
        </Slider>
    )
}
export default CardUser;