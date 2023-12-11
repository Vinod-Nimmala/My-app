import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-structureldirectives',
  standalone: true,
  imports: [CommonModule,RouterOutlet, FormsModule],
  templateUrl: './structureldirectives.component.html',
  styleUrl: './structureldirectives.component.scss'
})
export class StructureldirectivesComponent {
 
  public names : string[] = ['vinod', 'ajay', 'pavan', 'naveen', 'rajesh']
  public states : string[] = ['Telangana', 'Andra', 'Tamilnadu', 'Kerala']

  public products :any =[
    {name: 'pen', price:30},
    {name: 'ball', price:100},
    {name: 'book', price:250}
  ]
  public num: number =0;
  

}
