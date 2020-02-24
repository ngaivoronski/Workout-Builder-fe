import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { connect } from 'react-redux';
import ProgramOptions from './modals/ProgramOptions';
import AssignProgram from './modals/AssignProgram';

const ProgramListElement = (props) => {
    const Dispatch = useDispatch();

    const [AssignProgramModal, ToggleAssignProgramModal] = useState(false);
    const [ProgramOptionsModal, ToggleProgramOptionsModal] = useState(false);

    const viewProgram = () => {
        // Set the program to new program data and view it in the preview page
        Dispatch({ type: "UPDATE_NEW_PROGRAM_DATA", payload: props.program });

        props.navigate("/program/preview");
    }


    return(
        <div class="program-element">
            <div class="checkbox-div">
            <input type="checkbox" checked=""/>
            </div>
            <div class="title-div">
                <p onClick={() => viewProgram()}>{props.title}</p>
            </div>
            <div class="active-div">
                <p>{props.activeUsers}</p>
            </div>
            <div class="assign-div" id={`assign-div-${props.id}`}>
                <img src="https://i.imgur.com/kMrt2fe.png" onClick={() => ToggleAssignProgramModal(true)}></img>
                <p onClick={() => ToggleAssignProgramModal(true)}>Assign to clients</p>
                {AssignProgramModal ? <AssignProgram program_id={props.id} AssignProgramModal={AssignProgramModal} ToggleAssignProgramModal={ToggleAssignProgramModal} id={props.id} {...props}/>
                : <div />}
            </div>
            <div className="options-div" id={`options-div-${props.id}`}>
                <img className="vertical-dots" src="https://i.imgur.com/DPz3fj4.png" onClick={() => ToggleProgramOptionsModal(true)}></img>
                <img className="horizontal-dots" src="https://i.imgur.com/NOM7XwR.png" onClick={() => ToggleProgramOptionsModal(true)}></img>
                {ProgramOptionsModal ? <ProgramOptions program_id={props.id} ProgramOptionsModal={ProgramOptionsModal} ToggleProgramOptionsModal={ToggleProgramOptionsModal} id={props.id} {...props}/>
                : <div />}
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    loggedInUser: state.loggedInUser,
    updates: state.updates,
    coach_clients: state.coach_clients,
    coach_exercises: state.coach_exercises,
    coach_programs: state.coach_programs,
  });
  
  export default connect(
    mapStateToProps,
  )(ProgramListElement);