import React, {useState} from "react";
import s from "./Profile.module.css";


const ProfileStatusNew = (props) => {
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    const activateEditMode = () => {
        return setEditMode(true)
    }
    const deActivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status)
    }
    const onStatusChange = (e) => {
        return setStatus(e.currentTarget.value)
    }
    return (
        <div className={s.statusContainer}>
            <div className={s.statusBox}>
                {!editMode &&
                    <div className={s.statusInfo}>
                        <span onClick={activateEditMode}> {props.status || "Enter status"}</span>
                    </div>}
                {editMode &&
                    <div className={s.statusInput}>
                        <input onBlur={deActivateEditMode}
                               onChange={onStatusChange}
                               value={status}/>
                    </div>}
            </div>

        </div>
    )

}

export default ProfileStatusNew;
