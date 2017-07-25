import React, { Component } from 'react';
import {render} from 'react-dom';
import {GridBlock, GridCol, Grid} from 'iris/Grid';
import IrisIconV16 from 'iris/icons/iris_icon_v_16';
import IrisIconSocialTwitter16 from 'iris/icons/iris_icon_social_twitter_16';
import 'iris/GlobalCSS';

export class Footer extends Component {
	render() {
		return (
			<Grid className="">
				<GridBlock>
					<GridCol>
						<GridBlock>
							<GridCol mdSpan={6}>
								<p> TM + © 2017 Vimeo, Inc. All rights reserved.</p>
							</GridCol>
							<GridCol mdSpan={6} >
								<p> Terms | Privacy | Copyright | Cookies </p>
							</GridCol>
							<GridCol mdSpan={6}>
								<p> Made with <IrisIconV16 style={{'width': '20px', 'height':'20px'}}/> in NYC.</p> 
							</GridCol>
							<GridCol mdSpan={6}>
								<IrisIconSocialTwitter16 style={{'width': '20px', 'height':'20px'}} />
							</GridCol>
						</GridBlock>
						
					</GridCol>
				</GridBlock>
			</Grid>
		)
	}
}

render(<Footer />, document.querySelector('.vimeo_footer'));