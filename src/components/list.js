import { Component } from 'react';
import Items from './items';

class List extends Component {
    constructor() {
        super();
        this.handler = this.handler.bind(this);
    }
    handler(e) {
        e.preventDefault();
    }
    render() {
        return <Items items={this.props.items} />
    }
}
export default List;
