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
            if (response.status != 200 && response.status != 204) {
                console.log("Erreur lors de la requête code : "+response.status);	
            }
            return response.json();				
        }).then(function(datas) {
            //Erreur pour le setState les données sont bien récupérées mais impossible de les mettre dans le state, il ne connais pas this.setState
            this.setState({values: datas});
        }).catch(function(err) {
           console.log(err);
        });	
    },
    
    addLine: function(serie, season, episode) {
        var episode = {
                identifiant: this.state.values.length+1,
                serie: serie,
                season: season,
                episode: episode
        };
        this.state.values.push(episode);
        this.setState({values: this.state.values});
    },
    
    componentDidMount: function () {
        this.load();
    },

    render: function() {
        var episode = this.state.values.map(function(v) {
            return (<tr>
                        <td>{v.id}</td>
                        <td>{v.serie}</td>
                        <td>{v.season}</td>
                        <td>{v.episode}</td>
                    </tr>
            );
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
