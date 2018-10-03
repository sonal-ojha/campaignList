import React, { Component } from 'react';
import './App.css';
import New from './CreateNew/createNew';
import List from './List/List';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      displayTYPE: 'list' ,
      campaignList : [] ,
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleChildData = this.handleChildData.bind(this);
  }
  handleClick(e){    
    console.log("target name", type);
    this.setState({
      ...this.state , displayTYPE : type
    })
  }
  handleChildData(data){
    console.log("child data", data )
    this.setState ({
        ...this.setState , campaignList : data
    })
  }
  render() {
    return (
      <div className="App">
          <div className="header" > 
             All Campaigns
          </div>
          <div className="campaign_conatiner" >
              <div onClick={(e)=>this.handleClick("list",e)} className="Block ListBlock" > 
                Campaign List
              </div>
              <div onClick={this.handleClick} className="Block NewBlock">
                <div className="contentList" >
                  + Create New List
                </div>
              </div>
          </div>
          <hr />
          <div className="displayBlock" >
              { this.state.displayTYPE == "new" ? 
                <New dataFromParent={this.handleChildData} /> : 
                <List listData = {this.state.campaignList.length > 0 ? this.state.campaignList : '' }/> 
              }
          </div>
      </div>
    );
  }
}

export default App;
