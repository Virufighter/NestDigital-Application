import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ViewnavbarComponent } from './viewnavbar/viewnavbar.component';
import { ViewcoursesComponent } from './viewcourses/viewcourses.component';
import { ViewfriendsComponent } from './viewfriends/viewfriends.component';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { LoginRegistrationComponent } from './login-registration/login-registration.component';
import { AddnavbarComponent } from './addnavbar/addnavbar.component';
import { AddcourseComponent } from './addcourse/addcourse.component';
import { AddfriendComponent } from './addfriend/addfriend.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactsComponent } from './contacts/contacts.component';
import { IndexComponent } from './index/index.component'

const myrout:Routes=[
  {
    path:"",
    component:IndexComponent
    
  },{
    path:"admin",
    component:AdminLoginComponent
  },
  {
    path:"viewnav",
    component:ViewnavbarComponent
  },
  {
    path:"viewcourse",
    component:ViewcoursesComponent
  },
  {
    path:"viewfriend",
    component:ViewfriendsComponent
  },
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"reg",
    component:LoginRegistrationComponent
  },
  {
    path:"addnav",
    component:AddnavbarComponent
  },
  {
    path:"addcourse",
    component:AddcourseComponent
  },
  {
    path:"addfriend",
    component:AddfriendComponent
  },
  {
    path:"gallery",
    component:GalleryComponent

  },
  {
    path:"contact",
    component:ContactsComponent
  },

]

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AdminLoginComponent,
    ViewnavbarComponent,
    ViewcoursesComponent,
    ViewfriendsComponent,
    LoginComponent,
    LoginRegistrationComponent,
    AddnavbarComponent,
    AddcourseComponent,
    AddfriendComponent,
    GalleryComponent,
    ContactsComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myrout),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
