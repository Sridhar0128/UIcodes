import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  usernameError: HTMLElement | null;
  passwordError: HTMLElement | null;
  constructor(private router:Router) { }

  ngOnInit(): void {
    const loginForm = document.getElementById("loginForm");
    
    if (loginForm) {
      loginForm.addEventListener("submit", this.handleSubmit.bind(this));
    }

    this.usernameError = document.getElementById("usernameError");
    this.passwordError = document.getElementById("passwordError");
  }

  handleSubmit(event: Event): void {
    event.preventDefault();
    
    let isValid = true;
    
    const usernameInput = document.querySelector<HTMLInputElement>('input[name="Username"]');
    const passwordInput = document.querySelector<HTMLInputElement>('input[name="Password"]');

    if (!usernameInput || !passwordInput) {
      return;
    }
    const username = usernameInput.value;
    const password = passwordInput.value;
    
    if (!/^[a-zA-Z][a-zA-Z0-9]*$/.test(username)) {
      if (this.usernameError) this.usernameError.style.display = "block";
      isValid = false;
    } else {
      if (this.usernameError) this.usernameError.style.display = "none";
    }
    
    const passwordPattern = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;
    if (!passwordPattern.test(password)) {
      if (this.passwordError) this.passwordError.style.display = "block";
      isValid = false;
    } else {
      if (this.passwordError) this.passwordError.style.display = "none";
    }
     
console.log(isValid);

  if (isValid) {
    console.log('navigating');
    this.router.navigate(['/menu']);
  } else {
    alert('Please enter valid credentials.');
  }
}
  
  
  }



