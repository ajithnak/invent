
import React from 'react';
import { Link } from 'react-router-dom';
import './Searchbox.css';

class Searchbox extends React.Component  {
    constructor(props) {
      super(props);
      this.state = {
        filteredData: [],
      };
      
      this.getData = this.getData.bind(this);
    }
    getData = (q) => {
      fetch('http://localhost:3001/Product?title_like='+q)
        .then((res) => res.json())
        .then((i) => this.setState({ filteredData: i }));
    };
    componentDidMount() {
      this.getData();
    }
    render()
  {
    const handleSearch = (event) => {
      let value = event.target.value.toLowerCase()
      this.getData(value);

    }
  return (
    <div className="search">
    <div className='searchInputs'>
    
            <div class="btn-group">
       <div  id="dropdownMenuClickableOutside" data-bs-toggle="dropdown" data-bs-auto-close="inside" aria-expanded="false"  >
    
      <input 
              class="form-control me-2"
              type='search'
              placeholder='Search'
              aria-label='Search'
              onChange={handleSearch}
            />
  </div>

  <ul class="dropdown-menu" aria-labelledby="dropdownMenuClickableOutside">
    <li><div className="dataResult" >
      
        {this.state.filteredData.map((i,key ) => {
          return( <a className="dataItem"  target="_blank" > 
          <Link
       to={{
    pathname: "/search/"+i.id,
    state: { fromDashboard: true }
  }}
>
{i.title}</Link> </a>
          )}
        )}
        </div>
        </li>
    
  </ul>
</div>
    
</div>
 </div>
    
    
  );
}
}

export default Searchbox;




