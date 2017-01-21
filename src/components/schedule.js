import React, { Component } from 'react';

export default class Schedule extends Component {
	render() {
		return (
			<div>
				<div className='row'>
				<div className="col-md-12 text-center">
					<h2 className='text-center'>Raspored za Sarajevo</h2>
					<table align="center" >
						<thead>
				    	<tr>
				        <th className='dani'>Ponedjeljak</th>
				        <th className='dani'>Utorak</th>
				        <th className='dani'>Srijeda</th>
				        <th className='dani'>Cetvrtak</th>
				        <th className='dani'>Petak</th>
				        <th className='dani'>Subota</th>
				        <th className='dani'>Nedjelja</th>
					    </tr>
					   </thead>
					   <tbody>
					    	<tr>
						      <td className="donja">17:45</td>
						      <td className="donja">17:15</td>
						      <td className="donja">17:45</td>
						      <td className="donja">17:15</td>
						      <td className="donja">20:15</td>
						      <td className="donja">17:15</td>
						      <td className="donja">Rest</td>
					    	</tr>
					      <tr>
						      <td className="ukini">GI</td>
						      <td className="ukini">GI</td>
						      <td className="ukini">NoGi</td>
						      <td className="ukini">GI</td>
						      <td className="ukini">GI</td>
						      <td className="ukini">NoGI</td>
						      <td className="ukini"></td>
					   		</tr>
					    </tbody>
				  </table>
				</div>
				<div className="col-md-12 text-center">
					<h2 className='text-center'>Raspored za Tuzlu</h2>
					<table align="center" >
						<thead>
				    	<tr>
				        <th className='dani'>Ponedjeljak</th>
				        <th className='dani'>Utorak</th>
				        <th className='dani'>Srijeda</th>
				        <th className='dani'>Cetvrtak</th>
				        <th className='dani'>Petak</th>
				        <th className='dani'>Subota</th>
				        <th className='dani'>Nedjelja</th>
					    </tr>
					   </thead>
					   <tbody>
				    	<tr>
					      <td className="donja">17:45</td>
					      <td className="donja">17:15</td>
					      <td className="donja">17:45</td>
					      <td className="donja">17:15</td>
					      <td className="donja">20:15</td>
					      <td className="donja">17:15</td>
					      <td className="donja">Rest</td>
				    	</tr>
				      <tr>
					      <td className="ukini">GI</td>
					      <td className="ukini">GI</td>
					      <td className="ukini">NoGi</td>
					      <td className="ukini">GI</td>
					      <td className="ukini">GI</td>
					      <td className="ukini">NoGI</td>
					      <td className="ukini"></td>
				   		</tr>  
					   </tbody> 
				  </table>
				</div>
			</div>
	</div>
		);
	}
}
