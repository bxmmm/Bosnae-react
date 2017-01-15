import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer, IndexLinkContainer } from 'react-router-bootstrap';


export default class Header extends Component {
	render() {
		return (
			<div>
			  <Navbar inverse collapseOnSelect>
			    <Navbar.Header>
				      <Navbar.Brand>
				      <IndexLinkContainer to={{ pathname: '/' }}>
				        <a href="/">BOSNAE TEAM UNITED</a>
				       </IndexLinkContainer>
				      </Navbar.Brand>     
			      <Navbar.Toggle />
			    </Navbar.Header>
			    <Navbar.Collapse>
			      <Nav>
			      	<LinkContainer to={{ pathname: '/articles' }}>
			      		<NavItem eventKey={1} href="/articles">Clanci</NavItem>
							</LinkContainer>
							<LinkContainer to={{ pathname: '/location' }}>
			      		<NavItem eventKey={2} href="#">Lokacija</NavItem>
							</LinkContainer>
							<LinkContainer to={{ pathname: '/schedule' }}>
			      		<NavItem eventKey={3} href="#">Raspored</NavItem>
							</LinkContainer>
							<LinkContainer to={{ pathname: '/instructors' }}>
			      		<NavItem eventKey={4} href="#">Instruktori</NavItem>
							</LinkContainer>
							<LinkContainer to={{ pathname: '/gallery' }}>
			      		<NavItem eventKey={5} href="#">Galerija</NavItem>
							</LinkContainer>
							<LinkContainer to={{ pathname: '/contact' }}>
			      		<NavItem eventKey={6} href="#">Kontakt</NavItem>
							</LinkContainer>			        
			      </Nav>
			    </Navbar.Collapse>
			  </Navbar>
			</div>
		);
	}
}
