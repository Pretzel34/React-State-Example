import React, { Component } from 'react'
import Child from './Child';

class Parent extends Component {

    constructor(props){
        super(props);
        this.handleClickDown.bind(this);
        this.handleClickUp.bind(this);
        this.state = {value: 0, sym1: "+", sym2: "-"};
    }

    handleClickUp = (newNumber) => {
        this.setState({value: newNumber});
    }

    handleClickDown = (newNumber) => {
        this.setState({value: newNumber});
    }

    classList = {
        parent: {
            width: '100%',
            height: 200,
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'center',
            fontSize: 30,
            textAlign: 'center'
        },
        increment: {
            color: 'white',
            width: 50,
            height: 50,
            padding: 10,
            backgroundColor: 'black',
            borderRadius: '5%'
        },
        numDisplay: {
            width: 100,
            height: 100,
            color: 'blue',
            alignItems: 'center',
            justifyContent: 'center',
            display: 'flex'
        },
        banner: {
            width: 400,
            height: 100,
            backgroundColor: 'gray',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
            fontSize: 28,
            borderRadius: '1%'

        },
        bckBanner: {
            width: '100%',
            justifyContent: 'center',
            display: 'flex'
        },
        wFour: {
            width: 400,
            flexDirection: 'row',
            display: 'flex',
            alignItems: 'center'

        }


    }

    
    render() { 
        const banner = <div style={this.classList.banner}>Class Example</div>

        return (
            <React.Fragment>
                <div style={this.classList.bckBanner}>
                    {banner}
                </div>
                <div style={this.classList.parent}>
                    <div style={this.classList.wFour}>
                        <Child 
                            val={this.state.sym2}
                            newVal={this.state}
                            aOs={this.handleClickDown}
                        />
                        <div style={this.classList.numDisplay}>
                            {this.state.value}
                        </div>
                        <Child
                            val={this.state.sym1}
                            newVal={this.state}
                            aOs={this.handleClickUp}
                        />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
 
export default Parent;