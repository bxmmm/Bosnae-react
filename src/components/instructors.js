import React, { Component } from 'react';

export default class Instructors extends Component {
	render() {
		return (
			<div className='row'>
				<div className="col-md-6">
	      	 <h2 className='text-center'>Konan</h2>
	      	 <img src="https://scontent.fbeg1-1.fna.fbcdn.net/v/t1.0-9/15230742_10205463106776450_8305357886492994660_n.jpg?oh=a2449b51864d4aff1d77690b6dee1606&oe=58BE283E"/>
	      	 <hr/>
	       	<p className='text-justify'>There are many variations of passages of Lorem Ipsum available,
	        	but the majority have suffered alteration in some form, by injected humour,
	         	or randomised words which don't look even slightly believable. If you are going to use a passage
	          of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
	          All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making 
	          this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined 
	          with a handful of model sentence structures to generate Lorem Ipsum which looks reasonable. The generated 
	          Lorem Ipsum is t herefore always free from repetition, injected humour, or non-characteristic words etc.
	        </p>
	  	  </div>
   		  <div className="col-md-6">
      	 <h2 className='text-center'>Emir</h2>
      	 <img src="https://scontent.fbeg1-1.fna.fbcdn.net/v/t1.0-9/15219497_10205463106736449_4475287249132905392_n.jpg?oh=e0a0ffe43fa577e2baef4dae1e169be2&oe=58B57C01"/>
      	 <hr/>
      	 <p className='text-justify'>There are many variations of passages of Lorem Ipsum available,
       			but the majority have suffered alteration in some form, by injected humour,
       			or randomised words which don't look even slightly believable. If you are going 
       			to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing
       	  	hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat 
       	  	predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary
          	of over 200 Latin words, combined with a handful of model sentence structures to generate Lorem Ipsum which 
          	looks reasonable. The generated Lorem Ipsum is t herefore always free from repetition, injected humour, or 
        	  non-characteristic words etc.
      	 </p>
  		  </div>
			</div>
		);
	}
}
