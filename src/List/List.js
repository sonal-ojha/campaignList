import React from 'react';
import './List.css';

class List extends React.Component { 
    constructor(props){
        super(props);
        this.state = {
            ListItems : [] ,
            displayRenameItem : false ,
            renameValue : '' ,
        }
        this.handleOperation = this.handleOperation.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    componentDidMount(){
        this.setState({
            ...this.state , ListItems : this.props.listData
        })
    }
    handleOperation(id,e){
        // console.log("id", id);
    }

    //delete the Campaign Item 
    hadleDelete(idx, e){
        var items = this.state.ListItems ;
        if(items.length > 0 ){
           items.splice(idx , 1)
        }
        this.setState({
            ...this.state, ListItems : items
        })
    }

    handleChange(idx,e){
        var value = e.target.value;
        this.setState({
            ...this.state, renameValue : value
        })
        this.state.ListItems[idx] = this.state.renameValue ;
        console.log("renamed value onchange!!!!" , this.state.ListItems[idx]);
    }

    hadleRename(idx, e){
        var items = this.state.ListItems;
        console.log("tems", items)
        this.setState({
            ...this.setState, displayRenameItem : !this.state.displayRenameItem
        })
    }

    render(){
        console.log("data" , this.props.listData)
        const TBody = (this.props.listData.length > 0 && this.props.listData.map((item,i)=>{
            return (
                <div className="listItemBlock" key={i} >
                    <div className="ItemContainer" key={i} onClick={(e)=>this.handleOperation(i,e)} > 
                        <div className="item IndexNum" >
                            <button className="btnIdx"> {i} </button>
                        </div>
                        <div className="item Name">{item}</div>
                        <div className="item pause" onClick={this.hadlePause(i,e)} > Pause</div>
                        <div className="item comment" onClick={(e)=>this.hadleComment(i,e)} > Comment </div>
                        <div className="item rename" onClick={(e)=>this.hadleRename(i,e)}> Rename</div>
                        <div>
                            {
                                this.state.displayRenameItem && <input type="text" onChange={(e)=>this.handleChange(i,e)} />
                            } 
                        </div>
                        <div className="item delete" onClick={(e)=>this.hadleDelete(i,e)} > Delete</div>
                    </div>
                </div>    
            );
        }))

        return(
            <div>
                {TBody}
            </div>
        )
    }
}
export default List;