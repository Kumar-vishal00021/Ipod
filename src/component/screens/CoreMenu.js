import React from "react";

import images from "../../assets/image/image";
import Menu from "../Menu";
import { mainMenuOptions } from "../../constants";
export default function CoreMenu() {
   
    return(
        <div style={{position: "relative"}} className="screenContainer">
            <img src={images.coreMenuImg} className="screenImg"/>
            <Menu mainMenuOptions={mainMenuOptions} title={"Ipod"}/>
        </div>
    )
}