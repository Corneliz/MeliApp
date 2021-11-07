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
    this.props.history.push('/items/', { id: valId })
  }
  render() {
    return this.props.items.map(item => <div key={item.id} className="card">
      <div className="divisor"></div>
      <Link
        to={{
          pathname: `/items/${item.id}`,
          query: { id: item.id }
        }}>
        <div className="card-body flex-grid space-between">
          <div className="col flex-grid item">
            <div className="thumbnail col">
              <img src={item.picture} className="img" alt="item" />
            </div>
            <div className="col">
              <span className="price"> 
              {item.price.currency === 'ARS' && <span>$</span> }
              {item.price.amount}
                {item.free_shipping === true &&
                  <img className="shipping" src={shippingImg} alt="shipping" ></img>}
              </span>
              <h5 className="card-title">{item.title}</h5>

            </div>
          </div>
          <div className="col location">
            <span>{item.state_name}</span>
          </div>
        </div>   
        </Link>
      <div className="divisor"></div>
    </div >)
  }
}
export default Items