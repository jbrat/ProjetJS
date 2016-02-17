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
                if(response.status != 201) {
                    alert("erreur d'insertion");
                }
                console.log(response);
            }).catch(function(err){
                console.log(err);
            });	
           
            // Appel vers la méthode addLine du tableau je n'ai pas réussi à faire cet appel même en utilisant les props je ne vois pas comment le faire :(
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
                            <td><input type="submit" value="Add"/></td>
                        </tr>
                    </table>
            </form>
        );
    }
});

render(<Form />, document.getElementById('form'));
