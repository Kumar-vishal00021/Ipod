import { Component } from "react";
import Display from "./Display";
import Controller from "./Controller";
export default class Ipod extends Component{
    constructor(){
        super();
        this.state = {
           curruntScreenIndex : 1,
        }
    }
    render(){
        return(
           <div className="Ipod">
              <div className="Ipod-top">
                <Display curruntScreenIndex = {this.state.curruntScreenIndex}/>
              </div>
              <div className="Ipod-bottom">
                <Controller />
              </div>
           </div>
        )
    }
}