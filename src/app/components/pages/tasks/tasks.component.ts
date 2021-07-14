import { Component } from '@angular/core';
import { TaskCategory } from 'src/app/models/task-model';
import { moveItemInArray, CdkDragDrop, transferArrayItem } from "@angular/cdk/drag-drop";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent {

  taskCategoriesData: TaskCategory[] = [];

  constructor() { 
    this.taskCategoriesData.push({
      name: 'Opening',
      description: 'List of opening tasks',
      isTaskVisible : false,
      tasks: [
        {
          taskTemplate: 'Pay Land Transfer Tax',
          description:
            'Purchares is required to pay land trasfer tax on the registration of any Transfer 1',
        },
        {
          taskTemplate: 'Pay Land Transfer Tax',
          description:
            'Purchares is required to pay land trasfer tax on the registration of any Transfer 2',
        },
        {
          taskTemplate: 'Pay Land Transfer Tax',
          description:
            'Purchares is required to pay land trasfer tax on the registration of any Transfer 3',
        },
      ],
    });
    this.taskCategoriesData.push({
      name: 'Closing',
      description: 'List of closing tasks',
      isTaskVisible : false,
      tasks: [
        {
          taskTemplate: 'Pay Land Transfer Tax',
          description:
            'Purchares is required to pay land trasfer tax on the registration of any Transfer 1',
        },
        {
          taskTemplate: 'Pay Land Transfer Tax',
          description:
            'Purchares is required to pay land trasfer tax on the registration of any Transfer 2',
        },
        {
          taskTemplate: 'Pay Land Transfer Tax',
          description:
            'Purchares is required to pay land trasfer tax on the registration of any Transfer 3',
        },
      ],
    });
    this.taskCategoriesData.push({
      name: 'Preperation',
      description: 'List of preperation tasks',
      tasks: [],
      isTaskVisible : false,
    });
    this.taskCategoriesData.push({
      name: 'Post-Closing',
      description: 'List of Post-Closing tasks',
      isTaskVisible : false,
      tasks: [],

    });
  }

  onDropTaskCategoriesHandler(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.taskCategoriesData, event.previousIndex, event.currentIndex);
  }

  onDropTaskHandler(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    }else {
      console.log('Transfering item to new container')
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  
    
  }

  
}
