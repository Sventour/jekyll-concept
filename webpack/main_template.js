import Avatar from 'iris/Avatar';
import React, { Component } from 'react';
import {render} from 'react-dom';
import {GridBlock, GridCol, Grid} from 'iris/Grid';
import 'iris/GlobalCSS';


class TwoColumnTemplate extends Component {
	render() {
		return(
			<Grid>
				<GridBlock>
					<GridCol mdSpan={12}>
					</GridCol>
					<GridCol mdSpan={12}>
					</GridCol>
				</GridBlock>
			</Grid>
		)
	}
}

// render(<TwoColumnTemplate />, document.querySelector(''))