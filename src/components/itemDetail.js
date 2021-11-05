import React from 'react';

class Detail extends React.Component {
    constructor() {
        super();
        this.handler = this.handler.bind(this);
        this.state = { detail: {} };
        this.componentDidMount();
    }
    handler(e) {
        e.preventDefault();
    }
     getItemById() {
         
        const url = 'https://api.mercadolibre.com/items/' + this.props.id + '';
        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then((data) => {
                this.setState({ detail: data })
            })
            .catch(console.log);
    }
    render() {
        return <div className="flex-grid">
            <div className="col">
                <img src={this.state.detail.thumbnail} alt="thumbnail" />
            </div>
            <div className="col">
                <span>{this.state.detail.title}</span>
            </div>
        </div>
    }
}
export default Detail;