import React,{Component} from "react";
 import IpodScreens from '../constants';
 import CoreMenu from "./screens/CoreMenu";
export default function Display({curruntScreenIndex}) {
   if(curruntScreenIndex === 1){
    return <CoreMenu />;
   }
   else{
    return <div>No Screen</div>
   }
} 