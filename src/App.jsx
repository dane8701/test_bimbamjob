import React from 'react';
import tondeuse from './models/tondeuse.js';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fichier: null,
    };
  }
  
  componentDidUpdate() {
    console.log(this.state.fichier)
    const chaine = this.state.fichier;
    
    const t1 = new tondeuse(0, 0, '', 0, 0);
    let nbreTondeuse = 0;

    for(let i = 0; i < chaine.length; i++) {
      if(i==0) {
        t1.pelouseX = parseInt(chaine[i].charAt(0));
        t1.pelouseY = parseInt(chaine[i].charAt(1));
        
        console.log('Pelouse [' + t1.pelouseX + ', ' + t1.pelouseY + ']');
      }
      else {
        if(i%2 != 0) {
          nbreTondeuse += 1;
          // Le cas où c'est impair ; position depart de la tondeuse
          t1.coordooneeX = parseInt(chaine[i].charAt(0));
          t1.coordooneeY = parseInt(chaine[i].charAt(1));
          t1.orientation = chaine[i].charAt(3);
          
          console.log('Début Tondeuse ' + nbreTondeuse + ' [' + t1.coordooneeX + ', ' + t1.coordooneeY + '] et orientation ' + t1.orientation + '.');
        }
        else {
          // Le cas où c'est par ; deplacement de la tondeuse
          const regex = new RegExp('^RLF');
          if(regex.test(chaine[i]) == false) {
            // On sépare les deplacements pour pouvoir mieux les exécutés
            let mouvement = chaine[i].split('');
            // console.log(mouvement)
            
            mouvement.forEach(element => {
              t1.deplacement(element);
              // console.log(element);
              // console.log(t1);
            });
          }
          else {
            console.log("Il existe dans la chaine de deplacement un caratère différent de R, L ou de F.");
          }

          console.log('Fin Tondeuse ' + nbreTondeuse + ' [' + t1.coordooneeX + ', ' + t1.coordooneeY + '] et orientation ' + t1.orientation + '.');
        }
      }
    }
    
  }

  fichier = async (e) => {
    e.preventDefault()
    const lecteur = new FileReader()
    lecteur.onload = async (e) => { 
      const text = (e.target.result)
      // console.log(text)
      
      const chaine = text.split("\n");
      // console.log(chaine);

      this.setState({fichier: chaine});
      
    };
    lecteur.readAsText(e.target.files[0])
  }

  render() {
    
    return (
      <div>
        <h1>Bonjour !</h1>
        <form>
          <input type="file" onChange={(e) => this.fichier(e)}/>
        </form>
      </div>
    );
  }
}