import React, { useState } from 'react';
import MyForm from './MyForm';

const NewGuy = (props) => {
    const [isEditing, setIsEditing] = useState(false);

    const saveGuyDataHandler = (enteredGuyData) => {
        const GuyData = {
            ...enteredGuyData,
            id: Math.random().toString(),
        };
        props.onAddGuy(GuyData);
        setIsEditing(false);
    };

    const startEditingHandler = () => {
        setIsEditing(true);
    };

    const stopEditingHandler = () => {
        setIsEditing(false);
    };

    return (
        <div className='new-guy'>
            {!isEditing && (
                <button className='b-add' onClick={startEditingHandler}>Ajouter</button>
            )}
            {isEditing && (
                <MyForm
                    onSaveGuyData={saveGuyDataHandler}
                    onCancel={stopEditingHandler}
                />
            )}
        </div>
    );
};

export default NewGuy;
