import { Component } from 'react';
import Items from './items';

class List extends Component {
    constructor(props) {
        super(props);
        this.handler = this.handler.bind(this);
        this.state = { items: '' };        
    }
    handler(e) {
        e.preventDefault();
    }
    componentDidMount() {
        this.getItems();
   }
    getItems() {
        let searchValue = this.props.search.replace("?search=", '');
        const url = 'http://localhost:8080/api/items?q=' + searchValue + '';
        fetch(url)
            .then(res => res.json())
            .then((data) => {
                this.setState({ items: data.results.items });
            })
            .catch(console.log);
    }
    render() {
        return <div className="list"> {this.state.items !== '' &&
            < Items items={this.state.items} />}
        </div>
    }
}
export default List;
