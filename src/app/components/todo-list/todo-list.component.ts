import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { FormsModule } from '@angular/forms'; // Import FormsModule

@Component({
  standalone: true, // Le composant est autonome
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  imports: [CommonModule, FormsModule] // Ajoutez CommonModule et FormsModule ici
})
export class TodoListComponent {
  newTaskTitle: string = '';
  tasks: { id: number; title: string; isCompleted: boolean }[] = [];

  addTask() {
    if (this.newTaskTitle.trim()) {
      this.tasks.push({
        id: Date.now(),
        title: this.newTaskTitle.trim(),
        isCompleted: false
      });
      this.newTaskTitle = '';
    }
  }

  toggleCompletion(task: { isCompleted: boolean }) {
    task.isCompleted = !task.isCompleted;
  }

  deleteTask(taskId: number) {
    this.tasks = this.tasks.filter(task => task.id !== taskId);
  }
}