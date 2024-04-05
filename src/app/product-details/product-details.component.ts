import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from '../catalog/product.model';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
@Input() product! : IProduct; //in this case we made product-detail alone and we did sent data by using the @Input decorator
@Output() buy = new EventEmitter()



  getImageUrl(product:IProduct){
    if(!product) return '';
    return '/assets/images/robot-parts/'+product.imageName}

    buyButtonClicked(product : IProduct){
      this.buy.emit();
        

    }

    
}



