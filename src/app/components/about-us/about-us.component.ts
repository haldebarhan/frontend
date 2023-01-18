import { Component, OnInit } from '@angular/core';
declare var jQuery: any
@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit{
  ngOnInit(): void {
    jQuery(document).ready(()=> {
      jQuery("html, body").animate({
        scrollTop: 0
      }, 0.1)
    })
  }
}
