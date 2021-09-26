import React from "react";
import s from "./Message.module.css"


function MessageContent(props) {
    return (
        <div className={s.message}>
            {props.id}
            {props.message}
        </div>)
}
function Message(props) {

    let messageElements = props.messageData.map(mess => <MessageContent message={mess.message} id={mess.id}/>)
    return (
        <div className={s.messages}>
            {messageElements}
        </div>
    )
}

export default Message;