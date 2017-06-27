import {
  Component,
  OnInit
} from '@angular/core';
import {
  TypeaheadServiceService
} from "app/typeahead/typeahead-service.service";

@Component({

  selector: 'app-typeahead',
  templateUrl: './typeahead.component.html',
  styleUrls: ['./typeahead.component.css']
})
export class TypeaheadComponent implements OnInit {
  text: string;
  results: string[];
  allStates: string[];
  typeaheadServiceService: TypeaheadServiceService;
  constructor(_typeaheadServiceService: TypeaheadServiceService) {
    this.typeaheadServiceService = _typeaheadServiceService;
  }

  ngOnInit() {
    this.typeaheadServiceService.getAllStates().subscribe(states => {
      this.results = states;
    });
  }

 // search(event) {
 //   this.results = this.allStates.filter(q => q.toLowerCase().startsWith(this.text.toLowerCase()))
 // }
 search(event) {
     this.typeaheadServiceService.getState(this.text) .subscribe(states => {
      this.results = states;
      console.log( this.results)
    });
  }
}
