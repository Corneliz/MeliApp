import React from 'react'
import { Link } from 'react-router-dom';

class Items extends React.Component {
  constructor() {
    super();
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
      <div className="card-body">
        <img src={item.thumbnail} alt="item" />
        <h5 className="card-title">{item.title}</h5>
        <p>{item.price}</p>
        <Link
          to={{
            pathname: `/items/${item.id}`,
            query: { id: item.id }
          }}>
         {item.title}
        </Link>
      </div>
    </div >)
  }
}
export default Items