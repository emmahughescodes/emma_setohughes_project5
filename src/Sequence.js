import React from 'react';

//have to pass props into Sequence component
const Sequence = (props) => {
    
    return (

        <fieldset id={props.poseKey}>
            <h2>Section: {props.poseKey}</h2>
            
            {props.posesForSection.map((specificPose) => {
                return (
                    <div>
                        <input id={specificPose} type="checkbox" value={specificPose} onChange={props.updateUserSequence}/>

                        <label htmlFor={specificPose}>{specificPose}</label>
                    </div>
                )  
            })
           
                }
        </fieldset>
    )
}
export default Sequence;


{

}



// return <button value={specificPose} onClick={props.updateUserSequence}>{specificPose}</button>