import React from 'react'
import { render } from 'react-dom'
import { Form } from './form.js'

var Tableau = React.createClass({
    getInitialState: function() {
        return { 
            values: [{id:1,serie:"Teen wolf",season:5,episode:10}]
        } 
    },
    load: function(){	
        fetch('http://localhost:9312/', {
                method: 'GET'
        }).then(function(response) {					
                if (request.status != 200 && request.status != 204) {
                    console.log("Erreur lors de la requête code : "+response.status);	
                }
                return response.json();				
        }).then(function(datas) {
                this.setState({ values: datas });
        }).catch(function(err) {
           console.log(err);
        });	
    },
    
    componentDidMount: function () {
        this.load();
    },

    render: function() {
        var episode = this.props.values(function(v) {
            return (<tr>
                        <td>{v.id}</td>
                        <td>{v.serie}</td>
                        <td>{v.season}</td>
                        <td>{v.episode}</td>
                    </tr>);
        });
        
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
                        {episode}
                    </tbody>
                </table>
        );
    }
});


render(<Tableau />, document.getElementById('tableau'));
