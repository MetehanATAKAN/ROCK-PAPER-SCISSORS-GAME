import React, { useEffect } from 'react'
import Header from '../../components/Header';
import ComputerButton from '../../components/ComputerButton';
import GameButton from '../../components/GameButton';
import {useDispatch,useSelector} from "react-redux";
import { secondDecrease } from '../../redux/slice/RpsSlice';
import GameResult from '../../components/GameResult';


function Game() {
    const state = useSelector(state => state.rps.computerButtonSecons);
    const dispatch = useDispatch();
    let count=0;
    let ınterval;
    
    
    const counter=()=> {
        count++;
        if(count<4){
            dispatch(secondDecrease());
        }
        else{
            clearInterval(ınterval);
        }     
    }
    
    useEffect(() => {
        ınterval= setInterval(counter,1000);

    },[])

    
    return (
       
        <div>
            <Header/>
            <div className={state===0?"game-buttons":"game-buttons2"}>
                <GameButton/>
                <GameResult/>
                <ComputerButton/>
            </div>
        </div>
    )
}
export default Game;