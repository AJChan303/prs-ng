import { Component, OnInit } from '@angular/core';
import { Request } from '../../../model/request.class';
import { RequestService } from '../../../service/request.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})
export class RequestListComponent implements OnInit {
  title = 'Request List';
  requests: Request[];
  sortCriteria = 'name';
  sortOrder = 'asc';

  constructor(private reqSvc: RequestService) { }
  
  ngOnInit() {
    this.reqSvc.list().subscribe(resp => {
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

