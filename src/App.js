import './App.css';
import SearchBar from './components/SearchBar';
import ProductTable from  './components/ProductTable';
import { Component } from 'react';

class FilterableProductTable extends Component {
  constructor (props) {
    super(props);
    this.state = {
      keyword : '',
      isStock : false
    }
  }
  onText = (params) => {
    this.setState({
      keyword : params
    })
  }
  checkStock = (params) => {
    this.setState({
      isStock : params
    })
  }
  render() { console.log(this.state.isStock)
    return ( 
      <div className = "container">
        <SearchBar onSearch = {this.onText} checkStock = {this.checkStock}/>
        <ProductTable products = {products} keyword = {this.state.keyword}
                      isStock = {this.state.isStock}/>
      </div>
     );
  }
}
 const products = [
   {category:'sporting goods', price: '100.000vnd', name: 'football', stocked: true, id: 1},
   {category:'sporting goods', price: '200.000vnd', name: 'baseball', stocked: false, id: 2},
   {category:'sporting goods', price: '1.050.000vnd', name: 'smileball', stocked: true, id: 3},
   {category:'clothes', price: '10.000.000vnd', name: 'dressGucci', stocked: true, id: 1},
   {category:'clothes', price: '1.000.000vnd', name: 'aodai', stocked: false, id: 2},
   {category:'sporting goods', price: '50.000vnd', name: 'volleyball', stocked: false, id: 4}
 ]
export default FilterableProductTable;
