import React from 'react'

class SearchBar extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
          keyword : '',
        }}
    onHandleSubmit = (event) => {
        event.preventDefault();
    }
    onFilterText = (event) => {
        var filterText = event.target.value;
        this.setState({
            keyword: filterText
        })
    }
    onGivedText = () => {
        this.props.onSearch(this.state.keyword)
    }
    onCheckItem = (event) => {
        this.props.checkStock(event.target.checked)
    }
    render() { 
        return ( 
            <div>
                <form onSubmit = {this.onHandleSubmit}> 
                    <input type = "search" placeholder = "search" 
                            onChange = {this.onFilterText}/><br/>
                <button type = "submit" onClick = {() => this.onGivedText()}>SEARCH</button> <br/>
                    <input type = "checkbox" 
                    onChange = {this.onCheckItem}/><span> Only show products in stock</span>
                </form>
            </div>
         );
    }
}
 
export default SearchBar;
