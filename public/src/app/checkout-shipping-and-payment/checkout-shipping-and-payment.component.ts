import { Component, OnInit } from '@angular/core';
import { CheckoutService } from '../checkout.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'checkout-app-shipping-and-payment',
  templateUrl: './checkout-shipping-and-payment.component.html',
  styleUrls: ['./checkout-shipping-and-payment.component.scss']
})
export class CheckoutShippingAndPaymentComponent implements OnInit {
  checkoutForm: Object;

  constructor(
    private checkoutService: CheckoutService,
    private fb: FormBuilder
  ) {
    this.checkoutForm = fb.group({
      contactDetails: {
        firstName: null,
        lastName: null,
        emailAddress: null,
        phoneNumber: null
      }, 
      shippingAddress: {
        streetAddress: null,
        city: null,
        state: null,
        zipCode: null,
        country: null
        },
      paymentMethod: {
        nameOnCard: null,
        creditCardNumber: null,
        expMonth: null,
        expYear: null,
        CVV: null,
        billingAddress: {
          isSameAddress: null,
          streetAddress: null,
          city: null,
          state: null,
          zipCode: null,
          country: null
        },  
      },
    })
  };

  ngOnInit(): void {
  }

  submitForm = (form): void => {
    this.checkoutService.updateForm(form.value);
  }
}
