import 'font-awesome/css/font-awesome.min.css';

const Data = (props) => {

    return(
        <div style = {{padding : '2px'}}>
            <ul style = {{listStyleType: "none"}}>
                <li style = {{color : 'blue'}}>
                    {props.name}
                </li>
                <br/>
                <li>    
                    <i className="fa fa-home"></i>
                    {` ${props.address}`}
                </li> 
            </ul>
            
        </div>
    )
}

export default Data;