import logo2 from '../Assets/Logo_ML.png';
import search from '../Assets/ic_Search.png';
import './Nav.scss';
import React from 'react';
import { withRouter } from 'react-router';

class Nav extends React.Component {
    constructor() {
        super();
        this.handler = this.handler.bind(this);
        this.searchBoxRef = React.createRef();
    }
    handler(e) {
        e.preventDefault();
        this.searchItems(e);
    }
    searchItems(e) {
        const url = 'https://api.mercadolibre.com/sites/MLA/search?q=' + e.target[0].value + '';
        console.log(url);
        fetch(url, {
            paging: {
                _limit: 4
            }
        })
            .then(res => res.json())
            .then((data) => {
                this.props.filterUser(data.results, e.target[0].value);
                this.props.history.push('/items?search=' + e.target[0].value + '');

            })
            .catch(console.log);
    }
    keepSearch() {
        if (this.props.search !== '') {
            this.searchBoxRef.current = this.props.search;
        }
    }

    render() {
        this.keepSearch();
        return <div className="Nav">
            <div className="container flex-grid">
                <a className="logo col" href="/">
                    <img src={logo2} alt="logo" /></a>
                <form className="flex-grid" onSubmit={this.handler}>
                    <input id="searchBox" ref={this.searchBoxRef} type='text' className='from-control search-bar' placeholder="Nunca dejes de buscar"></input>
                    <button type="submit" aria-label="Buscar">
                        <div>
                            <img src={search} className="" alt="" />
                        </div>
                    </button>
                </form>
                <div className="col"></div>
            </div>
        </div>

    }
}
export default withRouter(Nav);
