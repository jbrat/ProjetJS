import React from 'react'
import { render } from 'react-dom'

import { Form } from './form.js'

var Tableau = React.createClass({
	

	
	
	
	render: function() {
		return (<table>
					<thead>
						<tr>
							<td>Id</td>
							<td>Serie</td>
							<td>Season</td>
							<td>Episode</td>
						</tr>
					</thead>
					<tbody>
					
					</tbody>
				</table>
		);
	}
});

var Line = React.createClass({
	render: function() {
		return (<tr>
					<td>{TITLE}</td>
					<td>OG</td>
					<td>OGO</td>
					<td>GOU</td>
				</tr>
		);
	}
});

render(<Tableau />, document.getElementById('tableau'));
