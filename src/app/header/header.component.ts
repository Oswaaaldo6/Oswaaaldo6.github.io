import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../services/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  name: string = "Oswaldo Corona";
  title: string = "Frontend Developer";
  objetive: string = "Jr en Oracle";
  photo: string = "https://avatars.githubusercontent.com/u/96072855?s=96&v=4";
  email: string = "oswaaaldo6@gmail.com";
  phone: string = "271 258 6189";
  location: string = "Orizaba, Veracruz, México";
  social: string = "@corona.osswaldo";

  constructor(private headerService: HeaderService) { }

  ngOnInit(): void {
    this.headerService.getHeader().subscribe((data: any) => {
      console.log(data);

      this.name = data.name;
      this.title = data.title;
      this.objetive = data.objetive;
      this.photo = data.photo;
      this.email = data.email;
      this.phone = data.phone;
      this.location = data.location;
      this.social = data.social;
    }
    );
  }
}