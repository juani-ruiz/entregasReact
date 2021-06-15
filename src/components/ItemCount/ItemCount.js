import React, { Component } from 'react'
import './ItemCount.css';
import { Button} from 'semantic-ui-react'

class ItemCount extends Component {
//Contador
    constructor(){
        super();

        this.state={
            count:0,        }
    }

//Suma y resta
    addButton = () => {
        this.setState({ count: this.state.count + 1 })

    }

    delButton = () => {
        this.setState({ count: this.state.count - 1 })

    }


    render() {
        return (

            <div>
                <div className="ItemCount">
                    <h3>Contador:</h3>
                    <p>{this.state.count}</p>
                                    
                </div>

                <div className="btn-contador">

                    <Button inverted color='green' onClick={this.addButton}>
                        +
                    </Button>

                    <Button inverted color='red' onClick={this.delButton}>
                        -
                    </Button>
                    
                </div>

            </div>
        )
    }
}

export default ItemCount
