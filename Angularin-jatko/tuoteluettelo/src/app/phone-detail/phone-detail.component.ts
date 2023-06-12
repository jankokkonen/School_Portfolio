import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhoneService } from '../phone.service';
import { PhoneDetail } from '../phone';
import { Phone } from '../phone';

@Component({
  selector: 'app-phone-detail',
  templateUrl: './phone-detail.component.html',
  styleUrls: ['./phone-detail.component.scss']
})
export class PhoneDetailComponent implements OnInit {
    phoneDetail: PhoneDetail | undefined;

    constructor(
      private route: ActivatedRoute,
      private phoneService: PhoneService
    ) { }

    ngOnInit() {
      this.getProduct();
    }

    getProduct(): void {
      const id = this.route.snapshot.paramMap.get('id') ?? '';
      console.log(id);
      this.phoneService.getProduct(id).subscribe((phoneDetail: PhoneDetail | undefined) => {
        this.phoneDetail = phoneDetail;
      })
    }
}
