import React, { Component } from 'react';
import {render} from 'react-dom';
import Button from 'iris/Button';
import {GridBlock, GridCol, Grid} from 'iris/Grid';
import InputText from 'iris/InputText'
import 'iris/GlobalCSS';

class Form extends Component {
	render() {
		return (
			<Grid>
				<GridBlock>
					<GridCol
            mdSpan={8}
            formColumn
        >
                <InputText
                name="formGridFirstName"
                id="formGridFirstName"
                label="Your Name"
            />
        </GridCol>
        <GridCol
            mdSpan={6}
            formColumn
        >
            <InputText
                name="formGridLastName"
                id="formGridLastName"
                label="Last Name"
            />
        </GridCol>
        <GridCol
            formColumn
        >
            <InputText
                name="formGridAddress"
                id="formGridAddress"
                label="Address"
            />
            <Button format="primary">Submit</Button>
        </GridCol>
				</GridBlock>
			</Grid>
		)
	}
}

render(<Form />, document.getElementById('foo'));