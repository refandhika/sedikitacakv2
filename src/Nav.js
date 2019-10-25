import React from 'react';
import './styles/Nav.css';

import {
  Link
} from 'react-router-dom';

const menus = [
  {id: 1, title: 'Home', link: '/'},
  {id: 2, title: 'Experience', link: '/experience'},
  {id: 3, title: 'Skill', link: '/skill'},
  {id: 4, title: 'About', link: '/about'},
]

class NavLeft extends React.Component {
  constructor(props) {
    super(props);

    this.onClickHandler = this.onClickHandler.bind(this);
  }

  onClickHandler(id) {
    this.props.onPageChange(id);
  }
  
  render() {
    const currPage = this.props.currPage;
    const menuList = this.props.menus.map((menu) =>
      <Link key={menu.id}
        className={currPage === menu.id ? "Nav-item active" : "Nav-item"}
        to={menu.link}
	onClick={() => this.onClickHandler(menu.id)}>
        {menu.title}
      </Link>
    );

    return (
      <div className="Nav-left">
	{menuList}
	<a className="Nav-item"
	  href="https://blog.sedikitacak.com">
	  Blog
	</a>
      </div>
    );
  }
}

class NavRight extends React.Component {
  constructor(props) {
    super(props);

    this.onClickHandler = this.onClickHandler.bind(this);
  }

  onClickHandler(id) {
    this.props.onPageChange(id);
  }
  
  render() {
    return (
      <div className="Nav-right">
        <Link className="Nav-brand"
          to="/"
	  onClick={() => this.onClickHandler(1)}>
          Sedikit Acak
        </Link>
      </div>
    );
  }
}

class Nav extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      page: 1
    };

    this.setPage = this.setPage.bind(this);
  }

  setPage(id) {
    this.setState({
      page: id
    });
  }

  render() {
    const page = this.state.page;

    return (
      <nav className="Nav">
        <NavLeft menus={menus}
	  currPage={page}
	  onPageChange={this.setPage}/>
        <NavRight onPageChange={this.setPage}/>
      </nav>
    );
  }
}

export default Nav;
