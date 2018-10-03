import React from 'react';
import './createNew.css';

class New extends React.Component { 
    constructor(props){
        super(props);
        this.state = {
            cmpName : '' ,
            cmpList : [] ,

        }
        this.handleChange = this.handleChange.bind(this);
        this.handleAddNew = this.handleAddNew.bind(this);
    }
    handleChange(e){
        var val = e.target.value ; 
        console.log("new name", val)
        this.setState({
            ...this.state , cmpName : val
        })
    }
    handleAddNew(e){
        var arr = this.state.cmpList;
        console.log(" arr ", arr , "CmpName" , this.state.cmpName )
        if(this.state.cmpName != ''){
            arr.push(this.state.cmpName)
        }
        this.setState({
            ...this.state , cmpList : arr
        })
        this.props.dataFromParent(this.state.cmpList);
    }
    render(){
        return(
            <div className="new_container" >
                <input type = "text" name = "addNew" value={this.state.cmpName == '' ? '': this.state.cmpName } onChange = {this.handleChange} / >
                <button onClick = {this.handleAddNew} > Add New </button>
            </div>
        )
    }
}
export default New;