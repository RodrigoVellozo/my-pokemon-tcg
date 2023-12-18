import { Component, ViewChild } from '@angular/core';
import { IgxGridComponent } from 'igniteui-angular';

enum DragIcon {
  DEFAULT = 'drag_indicator',
  ALLOW = 'remove',
  ADD = 'add',
}

const DATA = [
  /*eslint-disable*/
  {
    ID: 'ALFKI',
    CompanyName: 'Alfreds Futterkiste',
    ContactName: 'Maria Anders',
    ContactTitle: 'Sales Representative',
    Address: 'Obere Str. 57',
    City: 'Berlin',
    Region: null,
    PostalCode: '12209',
    Country: 'Germany',
    Phone: '030-0074321',
    Fax: '030-0076545',
    img: 'https://images.pokemontcg.io/pop6/1.png',
  },
  {
    ID: 'ANATR',
    CompanyName: 'Ana Trujillo Emparedados y helados',
    ContactName: 'Ana Trujillo',
    ContactTitle: 'Owner',
    Address: 'Avda. de la Constitución 2222',
    City: 'México D.F.',
    Region: null,
    PostalCode: '05021',
    Country: 'Mexico',
    Phone: '(5) 555-4729',
    Fax: '(5) 555-3745',
    img: 'https://images.pokemontcg.io/pop6/1.png',
  },
  {
    ID: 'ANTON',
    CompanyName: 'Antonio Moreno Taquería',
    ContactName: 'Antonio Moreno',
    ContactTitle: 'Owner',
    Address: 'Mataderos 2312',
    City: 'México D.F.',
    Region: null,
    PostalCode: '05023',
    Country: 'Mexico',
    Phone: '(5) 555-3932',
    Fax: '(5) 555-3745',
    img: 'https://images.pokemontcg.io/pop6/1.png',
  },
  {
    ID: 'FRANS',
    CompanyName: 'Franchi S.p.A.',
    ContactName: 'Paolo Accorti',
    ContactTitle: 'Sales Representative',
    Address: 'Via Monte Bianco 34',
    City: 'Torino',
    Region: null,
    PostalCode: '10100',
    Country: 'Italy',
    Phone: '011-4988260',
    Fax: '011-4988261',
    img: 'https://images.pokemontcg.io/pop6/1.png',
  },
];

@Component({
  selector: 'app-exp-grid',
  templateUrl: './exp-grid.component.html',
  styleUrl: './exp-grid.component.scss',
})
export class ExpGridComponent {
  @ViewChild('sourceGrid', { read: IgxGridComponent })
  public sourceGrid!: IgxGridComponent;

  @ViewChild('targetGrid', { read: IgxGridComponent })
  public targetGrid!: IgxGridComponent;

  public data1: any[] = DATA;
  public data2: any[] = [];

  public onEnterAllowed(args: any) {
    this.changeGhostIcon(args.drag.ghostElement, DragIcon.ADD);
  }

  public onLeaveAllowed(args: any) {
    this.changeGhostIcon(args.drag.ghostElement, DragIcon.DEFAULT);
  }

  public onDropAllowed(args: any) {
    console.log('drop key >> ',args.dragData.data)

    this.targetGrid.addRow(args.dragData.data);
    this.sourceGrid.deleteRow(args.dragData.key);
  }

  private changeGhostIcon(ghost: any, icon: string) {
    if (ghost) {
      const currentIcon = ghost.querySelector(
        '.igx-grid__drag-indicator > igx-icon'
      );
      if (currentIcon) {
        currentIcon.innerText = icon;
      }
    }
  }
}
