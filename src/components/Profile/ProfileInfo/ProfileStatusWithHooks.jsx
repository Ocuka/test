import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import classes from './ProfileInfo.module.css';



const ProfileStatusWithHooks = (props) => {
   
    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)

    useEffect( () => {
        setStatus(props.status)

    }, [props.status])

    const activateEditMode = () => {
        setEditMode(true)
    }

    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateUserStatus(status)
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div>
            {!editMode &&
                <div>
                    <span onDoubleClick={activateEditMode}>{ props.status || "======="}</span>
                </div>
            }
            {editMode &&
                <div>
                    <input autoFocus={true} onBlur={deactivateEditMode}
                    onChange={onStatusChange} value={status}/>
                </div>
            }
        </div>
    )

}

export default ProfileStatusWithHooks;