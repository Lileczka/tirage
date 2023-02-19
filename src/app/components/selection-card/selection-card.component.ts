import { Component, Input} from '@angular/core';
import { Class, CLASSES } from '../../class.mock';

@Component({
  selector: 'app-selection-card',
  templateUrl: './selection-card.component.html',
  styleUrls: ['./selection-card.component.css']
})
export class SelectionCardComponent {
  @Input()class!: Class;
  classes = CLASSES;
  etudiant: Class[]= CLASSES;
  selectedUser : any;
  
 //index = this.etudiant[Math.floor(Math.random() * this.etudiant.length)];
  
 //index = (arr: any[]) =>
  //arr[Math.floor(Math.random() * arr.length)]
  
  //getRandomElement = (arr: any[]) =>
  //arr.length ? arr[Math.floor(Math.random() * arr.length)] : undefined
  
  
  

titre= '🎰 Sélectionner une personne 🎰';


cacheMoi:boolean=true
visible: boolean=false

// Math.floor(Math.random() * this.class.prenom.length);
//index= Math.floor((Math.random() * 10) + 1);


onclick()
{
  this.cacheMoi=!this.cacheMoi
  this.visible=!this.visible;
  
}
}
