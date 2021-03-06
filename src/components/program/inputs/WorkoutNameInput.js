import React from "react";
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';

const WorkoutNameInput = (props) => {
    const Dispatch = useDispatch();

    const updateWorkoutName = (e) => {
        e.preventDefault();

        // find index of workout and index of the exercise
        let updatedProgram = JSON.parse(JSON.stringify(props.new_program));
        let indexWorkout = updatedProgram.workouts.findIndex(workout => workout.id === props.day.id);

        // update the exercise details
        updatedProgram.workouts[indexWorkout].name = e.target.value;

        // update the program data in redux
        Dispatch({ type: "UPDATE_NEW_PROGRAM_DATA", payload: updatedProgram });
    }

    return ( 
        <input className="day-name" value={props.day.name} onChange={updateWorkoutName}></input>
    )
}

const mapStateToProps = state => ({
    loggedInUser: state.loggedInUser,
    updates: state.updates,
    coach_clients: state.coach_clients,
    coach_exercises: state.coach_exercises,
    coach_programs: state.coach_programs,
    new_program: state.new_program,
});

export default connect(
    mapStateToProps,
)(WorkoutNameInput);