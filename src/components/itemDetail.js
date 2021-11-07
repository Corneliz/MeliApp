import React from 'react';

class Detail extends React.Component {
    constructor(props) {
        super(props);
        this.handler = this.handler.bind(this);
        this.state = { detail: '', description: '' };
        this.getItemById();
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
                this.getItemDescription();
            })
            .catch(console.log);
    }
    getItemDescription() {
        const url = ' https://api.mercadolibre.com/items/' + this.props.id + '/description';
        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then((data) => {
                this.setState({ description: data })
            })
            .catch(console.log);
    }
    render() {
        return <div className="itemDetail">
            <div className="flex-grid space-around">
                <div className="col thumbnail">
                    {this.state.detail.pictures !== undefined &&
                        <img src={this.state.detail.pictures[0].secure_url} alt="thumbnail" />}
                </div>
                <div className="col detail">
                    <span className="detail-status">
                        {this.state.detail.condition === 'new' &&
                            <span>Nuevo - </span>
                        }
                        <span>{this.state.detail.sold_quantity} vendidos</span></span>
                    <span className="card-title">{this.state.detail.title}</span>
                    <span className="price">${this.state.detail.price} </span>
                    <div className="buy">
                        <button className="btn primary">Comprar</button>
                    </div>
                </div>
            </div>
            <div className="flex-grid justify-start">
                <div className="col description">
                    <h4>Descripción del producto</h4>
                    <p>{this.state.description.plain_text}</p>
                </div>
            </div>
        </div>
    }
}
export default Detail;