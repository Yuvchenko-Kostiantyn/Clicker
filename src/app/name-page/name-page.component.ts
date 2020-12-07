import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-name-page',
  templateUrl: './name-page.component.html',
  styleUrls: ['./name-page.component.scss']
})
export class NamePageComponent implements OnInit {
  nameInput = '';
  invalidInput = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  saveAndPlay(): void {
    if (this.nameInput.trim().length < 2) {
      this.invalidInput = true;
    } else {
      localStorage.setItem('playerName', this.nameInput);
      this.router.navigate(['game']);
    }
  }
}
