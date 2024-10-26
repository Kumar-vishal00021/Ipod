import React,{ Component } from 'react';
import 'font-awesome/css/font-awesome.min.css';

export default class Controller extends Component{
   render(){
    return(
        <div className='controller'>
            <div className='controller-menu'>Menu</div>
            <div className='forward'> <i className="fa fa-forward" /> </div>
            <div className='backward'><i className="fa fa-backward" /></div>
            <div className='play-pause'><i className=" fa fa-light fa-play" /></div>
            <div className='controller-centre'></div>
        </div>
    )
   }
}