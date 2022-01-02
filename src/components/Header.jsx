import React,{useState} from 'react'
import {useSelector} from "react-redux";
import "../App.css";

function Header() {
   
    const score = useSelector(state => state.rps.score);    
    const counter = useSelector(state => state.rps.computerButtonSecons);
    const [count, setcount] = useState(score);
    return (
        <div className='Header'>
            <div className='text'>
                <span>ROCK</span>
                <span>PAPER</span>
                <span>SCISSORS</span>
            </div>
            <div className='score'>
                <h3>SCORE</h3>
                <div>
                    {
                        counter===0 ? score
                        : count
                    }
                </div>
            </div>
        </div>
    )
}
export default Header;