import React from 'react';

//have to pass props into Sequence component
const Sequence = (props) => {

    return (
        <fieldset id={props.poseKey}>
            <h2>section: {props.poseKey}</h2>
            {props.posesForSection.map((specificPose) => {
                return (
                    <div key={specificPose + props.poseKey}>
                        <input id={specificPose + props.poseKey} type="checkbox" value={specificPose} onChange={props.updateUserSequence} />

                        <label htmlFor={specificPose + props.poseKey}>{specificPose}</label>
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