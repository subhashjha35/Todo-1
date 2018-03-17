import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  tasksList: any[];
  isCheckedAll: boolean;
  newTask = {
    name: '', complete: false
  }
  taskType: String = 'true';
  constructor() {
    this.readTask();
    this.isCheckedAll = false;
  }
  writeTask = () => {
    localStorage.setItem('TL', JSON.stringify(this.tasksList));
  }
  readTask = () => {
    this.tasksList = JSON.parse(localStorage.getItem('TL'));
  }
  addTask = () => {
    this.tasksList.push({name: this.newTask.name, complete: this.newTask.complete});
  }
  removeTask = (index) => {
    alert('Removing ' + index);
    this.tasksList.splice(index, 1);
    console.log(this.tasksList);
  }
  changeTaskStatusType = (str) => {
    this.taskType = str;
  }
  toggleCheckAll = (val) => {
    for (let i = 0; i < this.tasksList.length; i++) {
      this.tasksList[i].complete = val;
    }
  }
  ngOnInit() {
  }

}
