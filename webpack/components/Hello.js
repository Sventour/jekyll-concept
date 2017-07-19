import React, { Component } from 'react';
import Button from 'iris/Button';
// import Badge from 'iris/Badge';
import 'iris/GlobalCSS';

export class Hello extends Component {
 render() {
	 return (
	 <form>
		<Button format="secondary">Secondary</Button>
<Button format="alternative">Alternative</Button>
<Button format="success">Success</Button>
<Button format="warning">Warning</Button>
		</form>
	)
 }
}
