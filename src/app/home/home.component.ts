import { Component, ElementRef, OnInit, AfterViewInit, ViewChild, ContentChild } from '@angular/core';
import { AnimationService, AnimationBuilder } from 'css-animator';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit, AfterViewInit {
@ViewChild('navlight') navlight;
  //@ContentChild('navlight') navlight: navlight;
  private _animator: AnimationBuilder;
  lat: number = 51.678418;
  lng: number = 7.809007;
 
  constructor(
  	animationService: AnimationService,
  	private _elementRef: ElementRef,
  	) { 
  	this._animator = animationService.builder();
  }

  ngOnInit() {
  }
  
 ngAfterViewInit() {
   /* this._animator
      .setType('bounce')
      .setDelay(150)
      .setDuration(700)
      .show(this._elementRef.nativeElement);*/
  }
  
}
