import { useState } from "react"
import React from "react"

const Hooks = () => {

    const classList = {
        hook: {
            width: 400,
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
        full: {
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column'
        }
    }

    const [myState, setMyState] = useState(0);

    const setUp = (num, stringOp) => {
        console.log(stringOp);
        if(stringOp === '+'){
            num++;
            console.log(num);
            setMyState(num);
        }else{
            num--;
            console.log(num);
            setMyState(num);
        }
    }

    const hookChild = (decideString) => {
        return(

            <div style={classList.hook}>
                <div style={classList.increment} onClick={() => setUp(myState, decideString)}>
                    {decideString}
                </div>
            </div>
        );
    }

    const hookParent = <div style={classList.numDisplay}>{myState}</div>

    const banner = <div style={classList.banner}>Hook Example</div>


    return(
        <div style={classList.full}>
            {banner}
            <div style={classList.hook}>
                {hookChild('-')}
                {hookParent}
                {hookChild('+')}
            </div>
        </div>
    );
}

export default Hooks;