import './App.css';
import CardUser from './components/CardUser'
import avatar1 from './images/avatar1.png'
import avatar2 from './images/avatar2.png'
import avatar3 from './images/avatar3.png'
import avatar4 from './images/avatar4.png'
import avatar5 from './images/avatar5.png'
import avatar6 from './images/avatar6.png'
import NavBar from './components/templates/navBar/NavBar'

const App = () =>  {
  const mapArray = [
    {
      name: 'Joe Boros',
      Address: '215 Plumb Branch St.Rapid City, SD 57701',
      img: avatar1
    },
    {
      name: 'Mindi Deems',
      Address: '1 Surrey Street Garland, TX 75043',
      img: avatar6
    },
    {
      name: 'Cristopher Leader',
      Address: '881 Williams Street Grosse Pointe, MI 48236',
      img: avatar3
    },
    {
      name: 'Soraya Bostick',
      Address: '8646 Cedar Swamp Ave. Havertown, PA 19083',
      img: avatar4
    },
    {
      name: 'Zaida Matt',
      Address: '26 Nicolls Dr. West Islip, NY 11795',
      img: avatar5
    },
    {
      name: 'Abram Howle',
      Address: '588 Albany Ave. Allen Park, MI 48101',
      img: avatar2
    }
  ];

  return (
        
        <div className = 'wrapper'>
          <NavBar></NavBar>
          <div className = 'container'>
            <div className = 'content'>
              {mapArray.map(item => {
                return(<CardUser items = {item}/>
                  )
              })}
            </div>
          </div>
        </div>
      );
}

export default App;
