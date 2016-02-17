import React from 'react'
import { render } from 'react-dom'

var Form = React.createClass({
    
    ajouterSerie: function(e) {
            e.preventDefault();

            var title = document.querySelector('input[name="serie"]').value;
            var season = document.querySelector('input[name="season"]').value;
            var episode = document.querySelector('input[name="episode"]').value;
            var content = { "title" : title, "season": season, "episode":episode };

            fetch('http://localhost:9312/', {
                method: 'POST',
                headers: {
                        'Accept': 'application/json'
                },
                body: JSON.stringify(content) 					
            }).then(function(response) {
                if(response.status == 201) {
                    window.refresh();
                } else {
                    console.log(response.status);
                }
            }).catch(function(err){
                console.log(err);
            });
            
            //APPELER LA METHODE addLine du table.js pour ajouter la ligne automatiquement
    },

    render: function() {
        return (<form method="POST" onSubmit={this.ajouterSerie}>
                    <table class="table">
                            <tr>
                                <td><label>Serie :</label></td>
                                <td><input type="text" name="serie" placeholder="Serie"/></td>
                            </tr>
                            <tr>
                                <td><label>Season :</label></td>
                                <td><input type="text" name="season" placeholder="Season"/></td>
                            </tr>
                            <tr>
                                <td><label>Episode :</label></td>
                                <td><input type="text" name="episode" placeholder="Episode"/></td>
                            </tr>
                            <tr>
                                <td><input type="submit" value="Ajouter"/></td>
                            </tr>
                    </table>
                </form>
        );
    }
});

render(<Form />, document.getElementById('form'));
