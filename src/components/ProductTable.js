import React, { Component } from 'react'
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow'
export default class ProductTable extends Component {
    render() {
        const isStock = this.props.isStock;
        let rows = [];
        var keyword = this.props.keyword;
        var categoryVal = null;
        this.props.products.forEach((product) => {
            if( isStock && !product.stocked) {return;}
            console.log(isStock);
            console.log(!product.stocked);

            if (product.category !== categoryVal && product.name.indexOf(keyword) !== -1) {
                rows.push(
                    <ProductCategoryRow category = {product.category} />
                )
            };
            if (product.name.indexOf(keyword) !== -1) {
                rows.push(
                <ProductRow product = {product} />
            )}
           categoryVal = product.category;
        })
        return (
            <div>
                <table className = "table">
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                    {rows}                 
                </table>
                
                
            </div>
        )
    }
}
