import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';

import { NgModule } from '@angular/core';



export const routes: Routes = [
    { path: '', component: ProfileComponent },
    { path: 'privacy-policy', component: PrivacyPolicyComponent },
    
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }

  /* import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { MinimalLayoutComponent } from './minimal-layout/minimal-layout.component'; // Importiere die neue Layout-Komponente
import { NgModule } from '@angular/core';



export const routes: Routes = [
    { path: '', component: ProfileComponent },
    {
      path: 'privacy-policy',
      component: MinimalLayoutComponent,
      children: [
        { path: '', component: PrivacyPolicyComponent }
      ]
    },
    
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
/* @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { } */ 