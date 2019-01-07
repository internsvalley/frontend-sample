import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  closeResult: string;
  categories = {
    category: [
      'Consumer Electronics',
      'Home & Living',
      'Children & Baby',
      'Household'
    ],
    condition: ['Unchecked', 'Like New', 'Used With Flaws', 'Defect', 'Mixed'],
    price: [
      '0 € - 99 €',
      '100 € - 199 €',
      '200 € - 299 €',
      '300 € - 399 €',
      '> 400 €'
    ]
  };

  constructor(private modalService: NgbModal) {}

  ngOnInit() {}

  open(content) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        result => {
          this.closeResult = `Closed with: ${result}`;
        },
        reason => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }


}
