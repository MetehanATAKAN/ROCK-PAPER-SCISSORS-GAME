import { createSlice } from "@reduxjs/toolkit";

export const rpsslice=createSlice({
    name:"rps",
    initialState:{
        items:[],
        score:0,
        buttonName:"",
        computerButtonSecons:3,
        computerButtonName:"",       
    },
    reducers:{
        renameButtonName:(state,action)=> {
            state.buttonName=action.payload;
        },
        secondDecrease: (state)=> {
           state.computerButtonSecons=state.computerButtonSecons-1;                    
        },
        firstcomputerButtonSecons:(state)=>{
            state.computerButtonSecons=3;
        },
        renameComputerButtonName:(state)=>{
            let buttonId;
            let randomID=Math.floor(Math.random()*3);
            buttonId=randomID;
            
            if(buttonId===0){
                state.computerButtonName="rock-button2";
                
            }
            else if(buttonId===1){
                state.computerButtonName="paper-button2"
            }
            else{
                state.computerButtonName="scıssors-button2"
            }
        },
        increaseScore:(state)=>{
            state.score=state.score+1;
        },
        decreaseScore:(state)=> {
            state.score=state.score-1;
        },
        fixedScore:(state)=>{
            let result=state.score;
            state.score=result;
        }
    }
})

export const {renameButtonName,secondDecrease,renameComputerButtonName,increaseScore,decreaseScore,firstcomputerButtonSecons,fixedScore}=rpsslice.actions;
export default rpsslice.reducer;