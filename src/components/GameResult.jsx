import React,{useEffect,useState} from 'react'
import {useSelector,useDispatch} from "react-redux";
import {decreaseScore, firstcomputerButtonSecons, fixedScore, increaseScore} from "../redux/slice/RpsSlice";
import {Link} from "react-router-dom";

function GameResult() {
    const state = useSelector(state => state.rps.computerButtonSecons);
    const buttonName = useSelector(state => state.rps.buttonName);
    const computerButtonName = useSelector(state => state.rps.computerButtonName);
    const dispatch = useDispatch();
    const [ısWin, setısWin] = useState("");

    const second=()=> {
        dispatch(firstcomputerButtonSecons());
    }

        useEffect(() => {
            if((buttonName==="rock" && computerButtonName==="scıssors-button2") || (buttonName==="paper" && computerButtonName==="rock-button2")  || (buttonName==="scıssors" && computerButtonName==="paper-button2") ){
                setısWin("win");
                dispatch(increaseScore());
            }
            else if((buttonName==="rock" && computerButtonName==="rock-button2") || (buttonName==="paper" && computerButtonName==="paper-button2")  || (buttonName==="scıssors" && computerButtonName==="scıssors-button2")){
                setısWin("equal");
                dispatch(fixedScore());
            }
            else{
                setısWin("lose");
                dispatch(decreaseScore());
            } 
        },[buttonName, computerButtonName, dispatch])   

    return (
        <div className='game-result'>
            
            {
                state===0 
                ?ısWin==="win" 
                    ?<div className='game-output'>
                        <span>YOU WIN</span>
                        <Link to="/" onClick={()=>second()}><button>PLAY AGAIN</button></Link>                     
                    </div>
                    :ısWin==="equal" 
                        ?<div className='game-output'>
                            <span>DRAW</span>
                            <Link to="/" onClick={()=>second()}><button>PLAY AGAIN</button></Link> 
                        </div>
                        :ısWin==="lose"
                        ?<div className='game-output'>
                            <span>YOU LOSE</span>
                            <Link to="/" onClick={()=>second()}><button>PLAY AGAIN</button></Link> 
                        </div>
                        :null
                :null                
            }
            
        </div>
    )
}
export default GameResult;