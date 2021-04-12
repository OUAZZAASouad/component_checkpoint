const ProfilPhoto = (props) => {
    var imgStyle = {
        display     : 'block',
        marginLeft  : 'auto',
        marginRight : 'auto'
    }
    return (
        <img src = {props.img} style = {imgStyle} width= '80' height ='80'/>
    )
}
export default ProfilPhoto;