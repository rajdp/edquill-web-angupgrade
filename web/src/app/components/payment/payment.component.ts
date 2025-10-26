import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import $ from 'jquery';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
    oncallback(e: any) {
        $.ajax({url: 'https://sandbox.forte.net/checkout/v1/js', dataType: 'json'});

    }
}
