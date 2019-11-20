import { Component } from '@angular/core';
import { AdalService } from 'adal-angular4';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  appName = 'Resource Manager';
  name = '';
  private adalConfiguration = {
    instance: 'https://login.microsoftonline.com/',
    tenant: 'vivekksc.onmicrosoft.com',
    clientId: '24e99122-fd9e-4877-b908-e954b42566cf',
    audience: 'https://vivekksc.onmicrosoft.com/ResourceMan-API',
    redirectUri: 'https://resource-manager.stackblitz.io/dashboard',
    postLogoutRedirectUri: '',
    endpoints: {
      'https://resourceman-api.azurewebsites.net/': '53e03f00-9e62-4be5-9a6c-0590edeef323'
    }
  }

  constructor(private adalService: AdalService) {
    this.adalService.init(this.adalConfiguration);
  }

  ngOnInit() {
    this.adalService.handleWindowCallback();
    console.log(this.adalService.userInfo);
  }

  login() {
    this.adalService.login();
  }

  logout() {
    this.adalService.logOut();
  }

  get authenticated(): boolean {
    return this.adalService.userInfo.authenticated;
  }
}
