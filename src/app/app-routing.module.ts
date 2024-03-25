import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { SkillsComponent } from './skills/skills.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { SuccessComponent } from './success/success.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'personal-details',component:PersonalDetailsComponent},
  {path:'contact-details',component:ContactDetailsComponent},
  {path:'skills',component:SkillsComponent},
  {path:'work-experience',component:WorkExperienceComponent},
  {path:'success',component:SuccessComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
