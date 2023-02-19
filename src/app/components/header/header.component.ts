import { Component, Input } from '@angular/core';
import { Class, CLASSES } from 'src/app/class.mock';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  tirage = 'Tirage au sort'
  absent = 'Absent.e.s'

  @Input()class!: Class;
  classes = CLASSES;

  visible: boolean=false
}
