import React from "react";

export default function Menu({mainMenuOptions,title}) {
    return(
        <div className="menu">
            <h3 className="menuTitle">{title}</h3>
            {
              mainMenuOptions.map((options)=>{
                return <div>{options}</div>
              })
            }
        </div>
    )
}