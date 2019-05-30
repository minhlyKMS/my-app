import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mlkms-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.scss']
})
export class SidebarMenuComponent implements OnInit {
  @Input() opened: boolean;
  @Input() position: string;

  constructor() {
    this.opened = false;
    this.position = 'left';
  }

  ngOnInit() {
  }

}
