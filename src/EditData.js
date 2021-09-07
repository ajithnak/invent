import React from 'react';
import "./AddProduct.css";
import {NavLink} from "react-router-dom";

export default class AddProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
    }
}
// getData = () => {
//     fetch('http://localhost:3001/Product/'+ window.location.hash.split("/")[2])
//       .then((res) => res.json())
//       .then((i) => this.setState({ data: [i] }));
      
//   };
  componentDidMount() {
    fetch('http://localhost:3001/Product/'+ window.location.hash.split("/")[3])
      .then((res) => res.json())
      .then((i) => this.setState({ data: i })); 
  }

changeHandler= (e) => {
  const name=e.target.name;
  const value=e.target.value;
  this.setState( {data:{
    ...this.state.data,
    [name]:value
  }
    
  })}

onSubmit=(e) =>{
      e.preventDefault();
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(this.state.data)
        };
        fetch('http://localhost:3001/product/'+this.state.data.id, requestOptions)
            .then(response => response.json())
            .then((i) => this.setState({ data : i }));
    


}

  render(){
    return (

        <div> hello,
             {this.state.data ? <form >
        <div className="home5 " style={{ marginTop: '5%', width:"50rem", marginLeft:"15%"}}>

            <div  className="input-group mb-3">
  <span className="input-group-text" >Title</span>
  <input type="text" className="form-control" name="title" value={this.state.data.title} onChange={this.changeHandler}   >
  
  </input>
</div>

<div className="input-group mb-3">
<span className="input-group-text" >Image</span>
  <input type="text" className="form-control" name="image" value={this.state.data.image} onChange={this.changeHandler}   >
  
  </input>
</div>

<div className="input-group mb-3">
  <span className="input-group-text" >Rating</span>
  <input type="text" className="form-control" name="rating" value={this.state.data.rating} onChange={this.changeHandler} id="basic-url" >
 
  </input>
</div>

<div className="input-group mb-3">
  <span className="input-group-text" >₹</span>
  <input type="text" className="form-control" name="price" value={this.state.data.price} onChange={this.changeHandler} >
  
  </input>
  <span className="input-group-text">.00</span>
</div>

<div className="input-group mb-3">
  <span className="input-group-text" >Stock</span>
  <input type="text" className="form-control"  aria-label="Server" name="stock" value={this.state.data.stock} onChange={this.changeHandler} >
  
  </input>
</div>

<button className="btn btn-primary" type="submit" onClick={this.onSubmit} >Update</button>

        </div>
            
        </form> : "Loading..."}
        </div>
    )
}
}
    
