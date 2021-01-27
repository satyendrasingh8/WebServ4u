import React from "react"
import SelectedPage from './selectedPage'

class CreateKaun extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          value: '5'
        
        };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(e) {
      this.setState({
          value: e.target.value
        
        });
      
    }
    
     handleSubmit(e) {
      e.preventDefault();
     const selectedValue = this.state.value;
      console.log("selected Qus "+selectedValue);
      return selectedValue;
      
    }
  
    render() {

        
      return (
       <div className="box">
       
                <form onSubmit={this.handleSubmit}>
                <label>
          Select Question:&nbsp;
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </label> &nbsp;
        
       </form>
             
     <SelectedPage  selectedValue={this.state.value} />

       </div>
      );
    }
  }
  
export default CreateKaun;
