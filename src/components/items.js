import React from 'react'
import { Link } from 'react-router-dom';
import './items.scss';
import shippingImg from '../Assets/ic_shipping.png';
class Items extends React.Component {
  constructor(props) {
    super(props);
    this.handler = this.handler.bind(this);
  }
  handler(e) {
    e.preventDefault();
  }
  getItemById(valId) {
    console.log(valId);
    this.props.history.push('/items/', { id: valId })
  }
  render() {
    return this.props.items.map(item => <div key={item.id} className="card">
      <div className="divisor"></div>
      <div className="card-body flex-grid space-between">
        <div className="col flex-grid item">
          <div className="thumbnail col">
            <img src={item.thumbnail} className="img" alt="item" />
          </div>
          <div className="col">
            <span className="price">${item.price}
              {item.shipping.free_shipping === true &&
                <img className="shipping" src={shippingImg} alt="shipping" ></img>}
            </span>
            <h5 className="card-title">{item.title}</h5>
            <Link
              to={{
                pathname: `/items/${item.id}`,
                query: { id: item.id }
              }}>
              {item.title}
            </Link>
          </div>
        </div>
        <div className="col location">
          <span>{item.address.state_name}</span>
        </div>
      </div>
      <div className="divisor"></div>
    </div >)
  }
}
export default Items