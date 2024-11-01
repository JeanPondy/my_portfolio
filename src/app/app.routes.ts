import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { ProfileComponent } from './profile/profile.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { ImprintComponent } from './imprint/imprint.component';

export const routes: Routes = [
  { path: '', component: ProfileComponent },
  { path: 'datenschutz', component: PrivacyPolicyComponent }, // Datenschutz Route
  { path: 'imprint', component: ImprintComponent }, // Impressum Route
  { path: '**', component: MainLayoutComponent }, // Fallback Route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
