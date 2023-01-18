import { Component, OnInit } from '@angular/core';
declare var jQuery: any;

@Component({
  selector: 'app-locative',
  templateUrl: './locative.component.html',
  styleUrls: ['./locative.component.css']
})
export class LocativeComponent implements OnInit {
  ngOnInit(): void {
    jQuery(document).ready(()=> {
      jQuery("html, body").animate({
        scrollTop: 0
      }, 0.1)
    })
  }
}
