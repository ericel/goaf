import {Directive, ElementRef, EventEmitter, Output} from '@angular/core';
import {NgModel} from '@angular/forms';
import { MapsAPILoader } from 'angular2-google-maps/core';
declare var google:any;

@Directive({
  selector: '[googleplace]',
  providers: [NgModel],
  host: {
    '(input)' : 'onInputChange()'
  }
})
export class GoogleplaceDirective  {
  @Output() setAddress: EventEmitter<any> = new EventEmitter();
  modelValue:any;
  autocomplete:any;
  private _el:HTMLElement;


  constructor(el: ElementRef,private model:NgModel, private _mapsAPILoader: MapsAPILoader) {
    this._el = el.nativeElement;
    this.modelValue = this.model;
  
  }
  ngAfterViewInit() {
    this._mapsAPILoader.load().then(() => {
   
    var input = this._el;
    this.autocomplete = new google.maps.places.Autocomplete(input, {});
    google.maps.event.addListener(this.autocomplete, 'place_changed', ()=> {
      var place = this.autocomplete.getPlace();
      this.invokeEvent(place);
    });
    });
  }
  invokeEvent(place:Object) {
    this.setAddress.emit(place);
  }


  onInputChange() {
  }
}