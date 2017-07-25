import Avatar from 'iris/Avatar';
import React, { Component } from 'react';
import {render} from 'react-dom';
import {GridBlock, GridCol, Grid} from 'iris/Grid';
import 'iris/GlobalCSS';

class About extends Component {
	
	
	render(){
		const members = [
		{
			name: 'Sage',
			image_url: "https://en.gravatar.com/userimage/46382438/9aaf62a33bdea4b5ac7c026ab6e9471c.jpg",
			desc: "blah blah blah"
		},
		{
			name: 'Kenya',
			image_url: "https://0.gravatar.com/avatar/eb2abd6237ef813f5571db04e4e7af77",
			desc: "blah blah blah"
		},
		{
			name: 'Brian',
			image_url: "http://0.gravatar.com/avatar/c89230723b06725a50867588f8a50b17",
			desc: "blah blah blah"
		},
		{
			name: 'Jon',
			image_url: "https://secure.gravatar.com/avatar/e808ad574bee85d078fa0f3c956901ff",
			desc: "blah blah blah"
		},
		{
			name: 'Dominick',
			image_url: "https://s.gravatar.com/avatar/c7761fd37ac9fb836145942a9fb6f81e?s=80",
			desc: "blah blah blah"
		},
		{
			name: 'Aaron',
			image_url: "//www.gravatar.com/avatar/9d465b354b7dc23a8d87df6f77d6af55.png",
			desc: "blah blah blah"
		},
		{
			name: 'Tommy',
			image_url: "//www.gravatar.com/avatar/1958309df9a0e7c13d12c0e6bfe31ff9",
			desc: "blah blah blah"
		}]
		
		return(
		
			<Grid>
				<GridBlock>
					<GridCol xsSpan={4}>
						<Avatar src={members[0].image_url} 
						srcSet={members[0].image_url} 
						alt={members[0].name}
							size="lg"
						 />
					</GridCol>
					<GridCol xsSpan={20}>
						<p>{members[0].desc}</p>
					</GridCol>
					
					<GridCol xsSpan={4}>
						<Avatar src={members[1].image_url} 
						srcSet={members[1].image_url} 
						alt={members[1].name}
							size="lg"
						 />
					</GridCol>
					<GridCol xsSpan={20}>
						<p>{members[1].desc}</p>
					</GridCol>
					
				
					<GridCol xsSpan={4}>
						<Avatar src={members[2].image_url} 
						srcSet={members[2].image_url} 
						alt={members[2].name}
							size="lg"
						 />
					</GridCol>
					<GridCol xsSpan={20}>
						<p>{members[2].desc}</p>
					</GridCol>
					
					<GridCol xsSpan={4}>
						<Avatar src={members[3].image_url} 
						srcSet={members[3].image_url} 
						alt={members[3].name}
							size="lg"
						 />
					</GridCol>
					<GridCol xsSpan={20}>
						<p>{members[3].desc}</p>
					</GridCol>
					
					<GridCol xsSpan={4}>
						<Avatar src={members[4].image_url} 
						srcSet={members[4].image_url} 
						alt={members[4].name}
							size="lg"
						 />
					</GridCol>
					<GridCol xsSpan={20}>
						<p>{members[4].desc}</p>
					</GridCol>
					
					<GridCol xsSpan={4}>
						<Avatar src={members[5].image_url} 
						srcSet={members[5].image_url} 
						alt={members[5].name}
							size="lg"
						 />
					</GridCol>
					<GridCol xsSpan={20}>
						<p>{members[5].desc}</p>
					</GridCol>
					
					<GridCol xsSpan={4}>
						<Avatar src={members[6].image_url} 
						srcSet={members[6].image_url} 
						alt={members[6].name}
							size="lg"
						 />
					</GridCol>
					<GridCol xsSpan={20}>
						<p>{members[6].desc}</p>
					</GridCol>
				</GridBlock>
			</Grid>
		)
	}
}

render(<About />, document.getElementById('members'));