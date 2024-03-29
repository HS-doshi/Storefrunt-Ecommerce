import { Component, Input, OnInit, Output } from '@angular/core';
import { Product } from '../../../types';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import { PaginatorModule } from 'primeng/paginator';
import { ButtonModule } from 'primeng/button';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ConfirmationService } from 'primeng/api';
import { ViewChild } from '@angular/core';
import { TruncatePipe } from '../../pipes/truncate.pipe';
import { PricePipe } from '../../pipes/price.pipe';
@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    RatingModule,
    ConfirmPopupModule,
    FormsModule,
    PaginatorModule,
    ButtonModule,
    TruncatePipe,
    PricePipe
  ],
  providers:[ConfirmationService],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent implements OnInit {

  constructor(private confirmationService : ConfirmationService){}

  @ViewChild('deleteButton') deleteButton: any;

  @Input() product!: Product;
  @Output() edit: EventEmitter<Product> = new EventEmitter<Product>();
  @Output() delete: EventEmitter<Product> = new EventEmitter<Product>();



  editProduct() {
    this.edit.emit(this.product);
  }
  confirmDelete(){
      this.confirmationService.confirm({
        target : this.deleteButton.nativeElement,
        message : 'Are you sure want to Delete this product?',
        accept:()=>{
          this.deleteProduct();
        }
      })
  }
  deleteProduct() {
    this.delete.emit(this.product);
  }
  ngOnInit() {}
}
