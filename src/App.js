import React, { Component } from 'react'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Item from './components/Item/Item';
import ItemCount from './components/ItemCount/ItemCount';
import ItemList from './components/ItemList/ItemList';

class App extends Component {
  render() {
    
    return (
      <div>   

        <Header title={'Bienvenido'} subtitle={'A la tienda virtual'}/>  
        <div className="row product-section">

          <div className="col product-section">
            <Item
            
            pictureUrl={'https://http2.mlstatic.com/D_NQ_NP_871565-MLA45740759361_042021-O.webp'}
            title={'Venzo Fx7'}
            price={'100.000'}
            description={'Cuadro Fx7 naranja talle S'}
            
            /> 
          </div> 

          <div className="col product-section">
            <Item 
            
            pictureUrl={'https://http2.mlstatic.com/D_NQ_NP_790802-MLA41258952373_032020-O.webp'}
            title={'Zenith ATC'}
            price={'68.000'}
            description={'Cuadro Zenith naranja talle L'}
            
            /> 
          </div> 

          <div className="col product-section">
            <Item 
            
            pictureUrl={'https://http2.mlstatic.com/D_NQ_NP_847201-MLA32884547437_112019-O.webp'}
            title={'BMX FIT TRL'}
            price={'120.000'}
            description={'Cuadro bmx'}
            
            /> 
          </div> 

        </div> 

        <div>
          
          <ItemCount />
          
        </div>
        
            <ItemList />

        <div>

          <Footer /> 

        </div>
            
        
      </div>

      
      
    )
  }
}

export default App
