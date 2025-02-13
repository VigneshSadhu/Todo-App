import { Component } from '@angular/core';
import { Todomodel } from '../../models/Todomodel';
@Component({
  selector: 'app-todotasks',
  standalone: false,
  templateUrl: './todotasks.component.html',
  styleUrl: './todotasks.component.css'
})
export class TodotasksComponent {
  todos!:Todomodel[];
  inputtodo:string="";
  ngOnInit(): void{
    this.todos=[
      {
        content:'First content',
        completed:true
      },
      {
        content:'Second content',
        completed:false
      },
    ]
  }

  toggledone(id:number){
    this.todos = this.todos.map((v,i) =>{
      if(i==id) v.completed=!v.completed;
      return v;
    });
  }

  deletetodo(id:number){
    this.todos=this.todos.filter((v,i) =>i!==id)
  }

  addtodo(){
    this.todos.push({
      content:this.inputtodo,
      completed:false
    });
    this.inputtodo="";
  }
}
