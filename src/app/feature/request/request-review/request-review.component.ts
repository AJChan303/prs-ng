import { Component, OnInit } from '@angular/core';
import { Request } from '../../../model/request.class';
import { RequestService } from '../../../service/request.service';
import {SystemService} from '../../../service/system.service'

@Component({
  selector: 'app-request-review',
  templateUrl: './request-review.component.html',
  styleUrls: ['./request-review.component.css']
})
export class RequestReviewComponent implements OnInit {
  title = 'Request List';
  requests: Request[];
  sortCriteria = 'name';
  sortOrder = 'asc';

  constructor(private reqSvc: RequestService, private sysSVC:SystemService) { }

  ngOnInit() {
    this.reqSvc.listRev(this.sysSVC.data.user.instance.id).subscribe(resp => {
      this.requests = resp as Request[];
    });
  }

  sortBy(column: string): void {
    if (this.sortCriteria === column) {
      this.sortOrder = (this.sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      this.sortCriteria = column;
      this.sortOrder = 'asc';
    }
  }
}

