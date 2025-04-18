import { Injectable } from '@angular/core';
import { Task } from '../models/task.model'; 

@Injectable({
  providedIn: 'root' 
})
export class TaskService {
  // Liste privée des tâches
  private tasks: Task[] = [
    // Quelques tâches initiales pour tester
    { id: 1, title: 'Apprendre Angular', isCompleted: false },
    { id: 2, title: 'Créer une Todo List', isCompleted: false },
    { id: 3, title: 'Faire les courses', isCompleted: true }
  ];
  private nextId: number = 4; 

  constructor() { }

  // Récupérer toutes les tâches
  getTasks(): Task[] {
    return this.tasks;
  }

  // Ajouter une nouvelle tâche
  addTask(title: string): void {
    if (title && title.trim()) { 
      const newTask: Task = {
        id: this.nextId++,
        title: title.trim(),
        isCompleted: false
      };
      this.tasks.push(newTask);
    }
  }

  // Supprimer une tâche par son ID
  deleteTask(id: number): void {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }

  // Marquer une tâche comme terminée/non terminée
  toggleTaskCompletion(id: number): void {
    const task = this.tasks.find(task => task.id === id);
    if (task) {
      task.isCompleted = !task.isCompleted;
    }
  }
}