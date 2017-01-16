import React, { Component } from 'react';

export default class Footer extends Component {
	render() {
		return (	
			<div className='footer'>
				<div className="background">
				  <div className="row background">
				    <div className="col-md-4 col-xs-6">
				      <h4 className="text-center">Linkovi</h4>
				      <ul>
				        <li><a href="http://www.canudobjj.com/" target="_blank">Bjj Munchen</a></li>
				        <li><a href="http://http://bjjmuenchen.com/" target="_blank">Canudo BJJ</a></li>
				        <li><a href="http://workout.ba/" target="_blank">Workout</a></li>
				      </ul>
				    </div>
				    <div className="col-md-4 col-xs-6">
				      <h4 className="text-center">Sponzori</h4>
				      <ul>
				        <li><a href="http://www.hotelcentral.ba/" target="_blank">Hotel Central</a></li>
				        <li><a href="http://www.coach.ba/" target="_blank">Autoškola Coach</a></li>
				        <li><a href="http://www.kia.ba/" target="_blank">Kia Motors BIH</a></li>
				      </ul>
				    </div>
				    <div className="col-lg-4 col-md-4 hidden-sm hidden-xs text-center" id="slike">
				      <img id="logodno" src="/img/logokrug.png" />
				      <img id="logodno2" src="/img/logop4p.png" />
				      <img id="logo3" src="http://workout.ba/wp-content/uploads/2013/12/logo-1.png" />
				    </div>
				  </div>
				</div>
			</div>
		);
	}
}
