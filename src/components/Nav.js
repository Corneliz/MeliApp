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
        this.props.filterUser([], e.target[0].value);
        this.props.history.push({
            pathname: '/items',
            search: '?search=' + e.target[0].value + '',
            state: { search: e.target[0].value },
        });
        if (this.props.history.action === 'PUSH') {
            window.location.reload(false);
        }
    }
    keepSearch() {
        if (this.props.search !== undefined) {
            this.searchBoxRef.current = this.props.search.replace("?search=", '');
        } else if (this.props.location.search !== '') {
            let search = this.props.location.search;
            search.replace("?search=", '');
            this.searchBoxRef.current = search;
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
