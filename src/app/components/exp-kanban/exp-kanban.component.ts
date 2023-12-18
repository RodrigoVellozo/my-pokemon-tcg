import { ChangeDetectorRef, Component, OnInit, Renderer2 } from '@angular/core';
import { IDropBaseEventArgs, IDropDroppedEventArgs } from 'igniteui-angular';

enum state {
  toDo = 'toDo',
  inProgress = 'inProgress',
  done = 'done',
}
interface IListItem {
  id: string;
  text: string;
  state: state;
  hide?: boolean;
  img: string;
}

@Component({
  selector: 'app-exp-kanban',
  templateUrl: './exp-kanban.component.html',
  styleUrl: './exp-kanban.component.scss',
})
export class ExpKanbanComponent implements OnInit {
  public toDoList: IListItem[] = [];
  public inProgressList: IListItem[] = [];
  public doneList: IListItem[] = [];

  private dragObj: any;
  private dummyObj: any;
  private lastDragEnterList: string = '';
  private currentList: any;

  constructor(private renderer: Renderer2, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.toDoList = [
      {
        id: 'STR-000132',
        text: 'Implement chat bubble',
        state: state.toDo,
        img: 'https://images.pokemontcg.io/hgss4/1.png',
      },
      {
        id: 'STR-000097',
        text: 'Implement sticky header',
        state: state.toDo,
        img: 'https://images.pokemontcg.io/xy5/1_hires.png',
      },
      {
        id: 'STR-000191',
        text: 'Change trial days to credit',
        state: state.toDo,
        img: 'https://images.pokemontcg.io/pl1/1.png',
      },
    ];
    this.inProgressList = [
      {
        id: 'STR-000124',
        text: 'Implement fback widget',
        state: state.inProgress,
        img: 'https://images.pokemontcg.io/dp3/1_hires.png',
      },
      {
        id: 'STR-000121',
        text: 'Add analytics',
        state: state.inProgress,
        img: 'https://images.pokemontcg.io/det1/1_hires.png',
      },
    ];
    this.doneList = [
      {
        id: 'STR-000129',
        text: 'Add SSL to account pages',
        state: state.done,
        img: 'https://images.pokemontcg.io/dv1/1_hires.png',
      },
    ];
    this.dragObj = null;
    this.dummyObj = null;
    // this.lastDragEnterList = '';
    // this.currentList = '';
  }

  public onStateContainerEnter(event: IDropBaseEventArgs) {
    // If we have entered another list container, we have to remove the 'dummy' object from the previous one
    if (this.currentList !== event.owner.element.nativeElement.id) {
      this.currentList = this.currentList.filter((item: any) => item.id !== 'dummy');
      this.cdr.detectChanges();
      this.currentList = event.owner.element.nativeElement.id;
      this.dummyObj = null;
    }
    // Add the blue container hightlight when an item starts being dragged
    this.renderer.addClass(event.owner.element.nativeElement, 'active');
  }

  public onStateContainerLeave(event: IDropBaseEventArgs) {
    // This event also gets raised when the user drags a task over another task tile.
    // That means we have to re-apply the 'active' class in the `onItemEnter` event handler
    this.renderer.removeClass(event.owner.element.nativeElement, 'active');
  }

  public dragStartHandler(event: any) {
    // We have to save the dragStartList so we could remove the dragged item from it later, when it gets dropped
    this.currentList = event.owner.element.nativeElement.dataset.state + 'List';
    this.lastDragEnterList = this.currentList;
    this.dragObj = this.currentList.filter((elem: any) => elem.id === event.owner.element.nativeElement.id)[0];
  }

  public dragEndHandler(event: any) {
    this.toDoList = this.toDoList.filter((x) => x.id !== 'dummy');
    this.inProgressList = this.inProgressList.filter((x) => x.id !== 'dummy');
    this.doneList = this.doneList.filter((x) => x.id !== 'dummy');
    if (this.dragObj) {
      this.dragObj.hide = false;
    }
  }

  public onItemEnter(event: IDropBaseEventArgs) {
    // Applying the container highlighting again
    const listContainer = event.owner.element.nativeElement.dataset.state;
    // this.renderer.addClass(this[listContainer].nativeElement, 'active');

    const currentList =
      event.owner.element.nativeElement.dataset.state + 'List';
    // const currentItemIndex = this[currentList].findIndex(
    //   (item) => item.id === event.owner.element.nativeElement.id
    // );
    // Checking if items in the same list are being reordered
    // if (this.lastDragEnterList === currentList) {
    //   const draggedItemIndex = this[currentList].findIndex(
    //     (item) => item.id === this.dragObj.id
    //   );
    //   this.swapTiles(draggedItemIndex, currentItemIndex, currentList);
    // } else {
    //   // We need a hidden dummy object that would make an empty space for the dragged element in the list
    //   if (!this.dummyObj) {
    //     this.dummyObj = {
    //       id: 'dummy',
    //       text: '',
    //       state: event.owner.element.nativeElement.dataset.state,
    //     };
    //     const newCurrentList = [
    //       ...this[currentList].slice(0, currentItemIndex),
    //       this.dummyObj,
    //       ...this[currentList].slice(currentItemIndex),
    //     ];
    //     this[currentList] = newCurrentList;
    //     this.cdr.detectChanges();
    //   } else {
    //     const dummyObjIndex = this[currentList].findIndex(
    //       (item) => item.id === 'dummy'
    //     );
    //     if (dummyObjIndex !== -1) {
    //       this.swapTiles(dummyObjIndex, currentItemIndex, currentList);
    //     }
    //   }
    // }
  }

  public onItemLeave(event: IDropBaseEventArgs) {
    const listContainer = event.owner.element.nativeElement.dataset.state;
    this.renderer.removeClass(listContainer.nativeElement, 'active');
  }

  public onItemDropped(event: IDropDroppedEventArgs) {
    const dropListState = event.owner.element.nativeElement.id;
    let dragListState = event.drag.element.nativeElement.dataset.state + 'List';
    const dummyItemIndex = dropListState.findIndex(
      (item: any) => item.id === 'dummy'
    );

    if (dropListState !== dragListState) {
      // The state of the dragged object should be updated before inserting it in the dropped list
      this.dragObj.state = dropListState.substring(0, dropListState.length - 4);
      
      // this[dragListState] = this[dragListState].filter((item) => item.id !== this.dragObj.id);
            
      [dragListState] = [dragListState].filter(
        (item:any) => item.id !== this.dragObj.id
      );

      // Check if there is a dummy item and replace it with the dragged one
      if (dummyItemIndex !== -1) {
        dropListState.splice(dummyItemIndex, 1, this.dragObj);
      } else {
        dropListState.push(this.dragObj);
      }
    }
    this.dragObj.hide = false;
    this.dragObj = null;
    // The default browser drag behavior should be cancelled
    event.cancel = true;
  }

  private swapTiles(
    currentIndex: number,
    targetIndex: number,
    itemList: string
  ): void {
    const tempObj = [itemList][currentIndex];
    [itemList].splice(currentIndex, 1);
    [itemList].splice(targetIndex, 0, tempObj);
    this.cdr.detectChanges();
  }
}
