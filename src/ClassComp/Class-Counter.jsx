import {Component} from 'react'
class Counter extends Component{
    constructor(props) {
        super(props);
        this.state = {
          count: 0,
        };
      }
    
      
    render(){
        return <div>
            <h1 >Count Value : {this.state.count}</h1>
            <button onClick={()=>this.setState({count:this.state.count + 1})}>Increase</button>
            <button onClick={()=>this.setState({count:this.state.count - 1})}>Decrease</button>
        </div>
    }
}
export default Counter