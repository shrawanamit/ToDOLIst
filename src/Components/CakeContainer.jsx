import React, { Component } from 'react';
import { connect } from 'react-redux';
import {buyCake} from '../redux'


class CakeContainer extends Component{
    render(){
        return(
            <div>
                <h2>No of cake - {this.props.noOfCake}</h2><br />
                <button onClick={this.props.buyCake}>BUY CAKE</button>
            </div>
        );
    }
}
const mapStateToProps = state =>{
    return{
        noOfCake : state.noOfCake
    }
}
const mapDispatchToProps = dispatch =>{
    return{
        buyCake: () => dispatch(buyCake())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CakeContainer)