import React from 'react'
import { Button, Icon, Menu } from 'semantic-ui-react'

function hacerClick(){
    console.log("Hiciste click!!!!!")
}

const Nav = () => (

    <Menu>
        <Menu.Menu position='right'>
        
            <Button color='green' class="ui button" onClick={hacerClick}>

            <Icon bordered name='shopping cart' />        



            </Button>

        </Menu.Menu>
    </Menu>
  
)

export default Nav