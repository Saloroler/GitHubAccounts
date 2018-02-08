import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { GithubDataService }  from "../../services/github-data.service";
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.css']
})
export class SearchUserComponent implements OnInit {
  user: any;
  nickname: string;
  searchingUser: boolean = false;
  newMessage: string;
  showContinueBtn: boolean = false;
  @Output() newAppMessage: EventEmitter<any> = new EventEmitter();



  constructor(public gitHubService: GithubDataService) {
  }

  ngOnInit() {

  }

  onSearch(form) {

    this.searchingUser = true;

    this.gitHubService.searchUser(this.nickname).subscribe(user => {
      this.user = user;
      this.searchingUser = false;
      this.showContinueBtn = true;
      this.newAppMessage.emit({
        message: `We found user`,
        error: false
      });
      // this.newMessage = 'We found user';
      console.log(user);
      this.gitHubService.saveUser(user);

    }, error => {
      this.searchingUser = false;

      this.newAppMessage.emit({
        message: `User not found`,
        error: true
      });
    });



  }

}
