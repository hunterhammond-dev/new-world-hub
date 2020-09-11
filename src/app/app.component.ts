import {Component, OnInit} from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import {Guides} from "./guides";
import {Topics} from "./topics";
import {GuidesService} from "./services/guides.service";
import {DataserviceService} from "./services/dataservice.service";
import {Meta, Title} from "@angular/platform-browser";
import {ForumService} from "./services/forum.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'blogtemp';

  faTwitter = faTwitter;
}

