import React from 'react';
import Nav from './Nav';
import List from './list';
import Detail from './itemDetail';

class Layout extends React.Component {
    constructor() {
        super();
        this.handler = this.handler.bind(this);
    }
    handler(e) {
        e.preventDefault();
    }
    render() {
        return (
            <div>
                <Nav filterUser={this.props.filterUser} search={this.props.search} />
                {this.props.id === undefined &&
                    <List filterUser={this.props.filterUser} items={this.props.items} search={this.props.search}/>
                }
                {this.props.id !== undefined &&
                    <Detail id={this.props.id} detail={this.props.detail} />
                }
            </div>
        );
    }
}
export default Layout;
