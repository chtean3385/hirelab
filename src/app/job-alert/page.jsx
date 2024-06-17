"use client"
import React from 'react';
import SavedJobs from '../SavedJobs';
import Link from 'next/link'
import Image from 'next/image'
var teamImg = require('../../images/team/pic1.jpg');

function JobAlert(){	
	return(
		<>
			<div className="page-content bg-white">
				<div className="content-block">
					<div className="section-full bg-white p-t50 p-b20">
						<div className="container">
							<div className="row">
								
								<div className="col-xl-12 col-lg-12 m-b30">
									<SavedJobs />
								</div>
							</div>
						</div>
					</div>
					
				</div>
			</div>	
			
		</>
	)

}

export default JobAlert;