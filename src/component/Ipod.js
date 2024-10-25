import { Component } from "react";
import Display from "./Display";
import Controller from "./Controller";
export default class Ipod extends Component{
    // constructor(){
    //     super();
    // }
    render(){
        return(
           <div className="Ipod">
              <div className="Ipod-top">
                <Display />
              </div>
              <div className="Ipod-bottom">
                <Controller />
              </div>
           </div>
        )
    }
}