import './navBar.css';
const NavBar = () => {
    return (
        <div className = 'navbar'>
            <img src = '/logo192.png' width = '65' height = "65" />
            <div className = 'items'>
                <a className = 'active' href="#home">Home</a>
                <a href="#profil">Profil</a>
                <a href="#login">Login</a>
                <a href="#signUp">Sign up</a>
            </div>
    
        </div>
    );
    
}

export default NavBar