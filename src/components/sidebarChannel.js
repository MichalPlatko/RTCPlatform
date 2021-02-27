import React from 'react'
import "../styles/sidebarChannel.css";

function SidebarChannel({id,name}) {
    return (
        <div className="sidebarChannel">
        <h4>
        <span className="sidebarChannelHashIcon">#</span>
        Channel name
        </h4>
        </div>
    )
}

export default SidebarChannel
