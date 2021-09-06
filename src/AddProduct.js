import React from 'react';
import "./AddProduct.css";
import {NavLink} from "react-router-dom";

export default class AddProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state= { 
      payload: {
        type:"",
        id:"",
        title: "",
        image: "",
        rating: "",
        price: "",
        stock: "",
      }
    };
}

changeHandler= (e) => {
  const name=e.target.name;
  const value=e.target.value;
  this.setState( {payload:{
    ...this.state.payload,
    [name]:value
  }
    
  })}

onSubmit=() =>{
console.log(this.state.payload);
fetch('http://localhost:3001/product', {
  method: 'POST',
  headers: {
  'Content-type': 'application/json'
},
body: JSON.stringify(this.state.payload),
}).then(r=>r.json()).then(res=>{
  if(res){
    this.setState({message:'New item is added Successfully'});
  }
});
}

  render(){
    return (
      <form >
        <div className="home5 " style={{ marginTop: '5%', width:"50rem", marginLeft:"15%"}}>
          <div className="input-group mb-3">
<span className="input-group-text" >Type</span>
  <input type="text" className="form-control" name="type" value={this.state.payload.type} onChange={this.changeHandler} placeholder="type" />
</div>
<div className="input-group mb-3">
<span className="input-group-text" >ID</span>
  <input type="text" className="form-control" name="id" value={this.state.payload.id} onChange={this.changeHandler} placeholder="ID"  />
</div>
            <div  className="input-group mb-3">
  <span className="input-group-text" >Title</span>
  <input type="text" className="form-control" name="title" value={this.state.payload.title} onChange={this.changeHandler} placeholder="TitleName"  />
</div>

<div className="input-group mb-3">
<span className="input-group-text" >Image</span>
  <input type="text" className="form-control" name="image" value={this.state.payload.image} onChange={this.changeHandler} placeholder="imageurl"  />
</div>

<div className="input-group mb-3">
  <span className="input-group-text" >Rating</span>
  <input type="text" className="form-control" name="rating" value={this.state.payload.rating} onChange={this.changeHandler} id="basic-url" />
</div>

<div className="input-group mb-3">
  <span className="input-group-text" >₹</span>
  <input type="text" className="form-control" name="price" value={this.state.payload.price} onChange={this.changeHandler} />
  <span className="input-group-text">.00</span>
</div>

<div className="input-group mb-3">
  <span className="input-group-text" >Stock</span>
  <input type="text" className="form-control" placeholder="Stocknumber" aria-label="Server" name="stock" value={this.state.payload.stock} onChange={this.changeHandler} />
</div>
<NavLink to="/">
<button className="btn btn-primary" type="submit" onClick={this.onSubmit} >Add</button>
</NavLink>
        </div>
        </form>
    )
}
}

