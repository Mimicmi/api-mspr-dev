import img1 from './img1.jpg';
import sun from './sun.png';
import water from './water.png';
import cloud from './cloud.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        {/* CREATION DU MENU*/}

        
          {/* INSERTION DES IMAGES ET ICONS ET TEXTS DANS LE HEADER*/}

        <img src={img1} className="App-img1" alt="home image" /> 
        <img src={sun} className='icon1'/>
        <img src={water} className='icon2'/>
        <img src={cloud} className='icon3'/>
          <div className='first-text'>
            <p className='firstst'>
              A'rosa-je
            </p>
            <p className='Titre'>
              PLANT CARE
            </p>
            <p className='secondst'>
              for everyone
            </p>
            <p className='ligne'>
              ----------------------------------
            </p>
            <p className='parag1'>
              Lorem Ipsum is simply dummy text of the printing. 
            </p>
            <p className='parag2'>
              Richard McClintock, a Latin professor at
            </p>
            <p className='parag3'>
              It has survived not
            </p>
          </div>
      </header>
    </div>
  );
}

export default App;
