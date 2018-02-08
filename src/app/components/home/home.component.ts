import { Component, OnInit } from '@angular/core';
import { GithubDataService } from "../../services/github-data.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  newMessage: string;


  constructor(
    public gitHubDataService: GithubDataService
  ) { }

  ngOnInit() {
  }

  onNewMessage(message){
    console.log(message)
    this.newMessage = message;
  }


}
