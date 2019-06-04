import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem, CdkDropList, CdkDragEnter, CdkDragExit, CdkDragEnd, } from '@angular/cdk/drag-drop';
import { enterView } from '@angular/core/src/render3/state';

@Component({
  selector: 'app-dragdrop',
  templateUrl: './dragdrop.component.html',
  styleUrls: ['./dragdrop.component.scss']
})
export class DragdropComponent  {
  todo = [
    'Get to work',
    'Pick up groceries',
    'Go home',
    'Fall asleep'
  ];

  done = [
    'Get up',
    'Brush teeth',
    'Take a shower',
    'Check e-mail',
    'Walk dog'
  ];

ngOnInit()
{
  console.log("list 1");
  console.log(this.todo);
  console.log("list 2");
  console.log(this.done);
}
  drop(event: CdkDragDrop<string[]>) {  
    if (event.previousContainer === event.container) {
      //console.log(event)
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      if(event.container.id==='todoList')
      {
        console.log("After Changed in List 1");
        console.log(event.container.data);
      }
      else
      {
        console.log("After Changed in List 2");
        console.log(event.container.data);
      }
       } 
      else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
                                if(event.container.id==='todoList')
                                  {
                                    console.log("After Changed in list 1");
                                    console.log( event.container.data);
                                    console.log("After Changed in  list 2");
                                    console.log( event.previousContainer.data)
                                  }
                                  else
                                  {
                                    console.log("After Changed in list 2");
                                    console.log( event.container.data);
                                    console.log("After Changed in  list 1");
                                    console.log( event.previousContainer.data)
                                  }
        console.log("event dropped " )
    }
    
  }
  dropEnter(event:CdkDragEnter<string[]>)
    {
        console.log("event drop entered" )  
    }
    dropExit(event:CdkDragExit<string[]>)
    {
        console.log("event drop exited " )
    }
    dragStarted(event)
    {
        console.log("event drag started" )
    }
    dragDrop(event)
    {
        console.log("event drag dropped " )
    }
    dragEnded(event)
    {
        console.log("event drag ended " )
    }
    DragEntered(event)
    {
      console.log("event drag entered " )
    }
    DragExited(event)
    {
      console.log("event drag exited " )
    }
    DragMoved(event)
    {
      console.log("event drag moved " )
    }
    DragReleased(event)
    {
      console.log("event drag released " )
    }
}