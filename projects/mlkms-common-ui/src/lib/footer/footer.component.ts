import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mlkms-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  @Input() fixed: boolean;

  constructor() { }

  ngOnInit() {}

}
