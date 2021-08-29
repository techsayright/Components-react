import React from 'react'
import './UserDetails.css'

export const UserDetails = (props) => {
    
    return (
        // dynamic className
        <div className={(props.cn) ?  `${props.cn} UserDetails` :"UserDetails"} onClick={()=>{if(props.onClicks){props.pushData(props.onClicks.id, props.onClicks.title)}}}>
            {/* we just put it here ternary oprator */}
            
            <div className="userId">{(props.demoData) ? props.demoData.id : "User Id"} </div>
            <div className="userTitle">{(props.demoData) ? props.demoData.title : "User Title"}</div>
            <div className="userCompleted">{(props.demoData) ? props.demoData.completed.toString() : "User Work Status"}</div>
        </div>
    )
}

// export const pushFunction = ()=>{
    
// }