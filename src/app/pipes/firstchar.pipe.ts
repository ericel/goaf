import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstchar'
})
export class FirstcharPipe implements PipeTransform {

  transform(value){
		return value.replace(/ /g, "");
	}

}
