import React from 'react'


 const Child = ({val, newVal, aOs}) => {

    // constructor(props){
    //     super(props);
    //     this.handleClickUp.bind(this);
    //     this.handleClickDown.bind(this);
    // }

    // handleClickUp = () =>{
    //     this.props.setStateOfParent(this.props.value++);
    // }

    // handleClickDown = () => {
    //     this.props.setStateOfParent(this.props.value--);
    // }

    const classList = {
        child: {
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
        }
    }

    const setUp = () => {
        if(val === '+'){
            aOs(newVal.value + 1);
        }else{
            aOs(newVal.value - 1);
        }
    }

    
        return (
            <div style={classList.child}>
                <div style={classList.increment} onClick={setUp}>
                    {val}
                </div>
            </div>
        );
}
 
export default Child;