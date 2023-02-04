import React, { useState } from 'react';
import { SubmitError } from './SubmitError';
import './../App.css';


const MyForm = (props) => {
    const [enteredName, setEnteredName ] = useState('');
    const [enteredAge, setEnteredAge ] = useState('');
    const [error, setError] = useState(false);

    const NameChangeHandler = (event) => {
        setEnteredName(event.target.value);
    };

    const AgeChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();
        if (!enteredName || !enteredAge) {
            setError(true);
            return;
        }
        setError(false);
        const GuyData = {
            name: enteredName,
            age: enteredAge + " ans",
        };
        props.onSaveGuyData(GuyData);
        setEnteredName('');
        setEnteredAge('');
    };

    return (
        <form onSubmit={submitHandler}>
            <SubmitError error={error}>
            <div className='Boxes'>
                <div className='Named'>
                    <label>Name</label>
                    <input
                        type='text'
                        value={enteredName}
                        onChange={NameChangeHandler}
                    />
                </div>
                <div className='Aged'>
                    <label>Age</label>
                    <input
                        type='number'
                        min='1'
                        step='1'
                        value={enteredAge}
                        onChange={AgeChangeHandler}
                    />
                </div>
            </div>
            <div className='new-actions'>
                <button type="button" onClick={props.onCancel}>Cancel</button>
                <button type='submit'>Add</button>
            </div>
            </SubmitError>
        </form>
    );
};

export default MyForm;





