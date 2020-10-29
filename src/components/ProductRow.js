import React, { Component } from 'react';

export default class ProductRow  extends Component {
    render() {
        const product = this.props.product;
        const names = product.stocked ? (
        <span style = {{color: 'blue'}}>{product.name}</span>) : (
        <span style = {{color: 'red'}}>{product.name}</span>
        )
        return (
            <tr>
                <td>
                    {names}
                </td>
                <td>
                    {product.price}
                </td>
            </tr>
            
        )
    }
}
