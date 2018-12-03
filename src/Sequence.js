import React from 'react';
//simple component 
//have to pass props into Sequence component
const Sequence = (props) => {

    return (
        <fieldset id={props.poseKey} required="required">
            <h2 id={props.poseKey}>{props.poseKey}</h2>
            {props.posesForSection.map((specificPose) => {
                return (
                    <div className="answerValues" key={specificPose + props.poseKey} >
                        <input className="inputCheckbox" id={specificPose + props.poseKey} type="checkbox" value={specificPose} onChange={props.updateUserSequence} />
                        <label htmlFor={specificPose + props.poseKey}>{specificPose}</label>
                    </div>
                )
            })
            }
        </fieldset>
    )
}
export default Sequence;