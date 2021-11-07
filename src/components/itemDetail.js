import React from 'react';

class Detail extends React.Component {
    constructor(props) {
        super(props);
        this.handler = this.handler.bind(this);
        this.state = { detail: '', description: '', price: '' };
    }
    componentDidMount() {
        this.getItemById();
    }
    handler(e) {
        e.preventDefault();
    }
    getItemById() {
        const url = 'http://localhost:8080/api/items/' + this.props.id + '';
        fetch(url)
            .then(res => res.json())
            .then((data) => {
                this.setState({ detail: data.results.item, price: data.results.item.price })
            })
            .catch(console.log);
    }
    render() {
        return <div className="itemDetail">
            <div className="flex-grid space-around">
                <div className="col thumbnail">
                    <img src={this.state.detail.picture} alt="thumbnail" />
                </div>
                <div className="col detail">
                    <span className="detail-status">
                        {this.state.detail.condition === 'new' &&
                            <span>Nuevo - </span>
                        }
                        <span>{this.state.detail.sold_quantity} vendidos</span></span>
                    <span className="card-title">{this.state.detail.title}</span>
                    <span className="price"> {this.state.price.currency === 'ARS' && <span>$</span>}{this.state.price.amount} </span>
                    <div className="buy">
                        <button className="btn primary">Comprar</button>
                    </div>
                </div>
            </div>
            <div className="flex-grid justify-start">
                <div className="col description">
                    <h4>Descripción del producto</h4>
                    <p>{this.state.detail.description}</p>
                </div>
            </div>
        </div>
    }
}
export default Detail;