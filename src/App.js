import React, { Component } from 'react'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import UserCard from './components/UserCard/UserCard';
import ItemCount from './components/ItemCount/ItemCount';
import Nav from './components/Menu/Menu';


class App extends Component {
  render() {
    return (
      <div>

        <Header title={'Bienvenido'} subtitle={'A la tienda virtual'}/>  
        <div className="row product-section">

          <div className="col product-section">
            <UserCard
            
            img={'https://http2.mlstatic.com/D_NQ_NP_871565-MLA45740759361_042021-O.webp'}
            title={'Venzo Fx7'}
            product={'Bicicleta mtb/stunt'}
            description={'Cuadro Fx7 naranja talle S'}
            
            /> 
          </div> 

          <div className="col product-section">
            <UserCard 
            
            img={'https://http2.mlstatic.com/D_NQ_NP_790802-MLA41258952373_032020-O.webp'}
            title={'Zenith ATC'}
            product={'Bicicleta mtb/stunt'}
            description={'Cuadro Zenith naranja talle L'}
            
            /> 
          </div> 

          <div className="col product-section">
            <UserCard 
            
            img={'https://http2.mlstatic.com/D_NQ_NP_847201-MLA32884547437_112019-O.webp'}
            title={'BMX FIT TRL'}
            product={'Bicicleta bmx'}
            description={'Cuadro bmx'}
            
            /> 
          </div> 

        </div> 

        <div>
          
          <ItemCount />
          
        </div>   
        
       



        <div>

          <Footer /> 

        </div>
            
        
      </div>

      
      
    )
  }
}

export default App
