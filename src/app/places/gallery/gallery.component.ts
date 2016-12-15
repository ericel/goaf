import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
  host: {'(window:keydown)': 'hotkeys($event)'}
})
export class GalleryComponent implements OnInit {
@Input() datasource;
   selectedImage;
  constructor() { }

  ngOnInit() {
  }
  setSelectedImage(image){
      this.selectedImage= image;  
  }
  navigate(forward){
   var index = this.datasource.indexOf(this.selectedImage)+(forward ? 1: -1);
   if(index >= 0 && index < this.datasource.length){
      this.selectedImage = this.datasource[index];  
   }
}
hotkeys(event){
   if(this.selectedImage){
      if (event.keyCode == 37){
         this.navigate(false);
      }else if(event.keyCode == 39){
         this.navigate(true);
      }
   }
}
}
