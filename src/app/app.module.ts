import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyContainerComponent } from './myContainer/myContainer.component';
import { TopnavComponent } from './myContainer/topnav/topnav.component';
import { HeaderComponent } from './myContainer/header/header.component';
import { Txtsec1Component } from './myContainer/txtsec1/txtsec1.component';
import { Txtsec2Component } from './myContainer/txtsec2/txtsec2.component';
import { DatabindComponent } from './databind/databind.component';
import { ClassStyleComponent } from './class-style/class-style.component';
import { EventbindingComponent } from './eventbinding/eventbinding.component';
import { TwoWayDatabindComponent } from './two-way-databind/two-way-databind.component';
import { from } from 'rxjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//ngx bootstrape
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { NgifComponent } from './ngif/ngif.component';
import { NgswitchComponent } from './ngswitch/ngswitch.component';
import { NgforComponent } from './ngfor/ngfor.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductComponent } from './product/product.component';
import { ContactComponent } from './contact/contact.component';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const appRouters:Routes=[
{path:'' , redirectTo:'login',pathMatch:'full'},
{path:'login' , component:LoginComponent},
{path:'home' , component:HomeComponent},
{path:'about', component:AboutComponent},
{path:'product', component:ProductComponent},
{path:'contact', component:ContactComponent},

{path:'**', component:PagenotfoundComponent}, //to redirect on 404 page put '**' in path always declare last
]

@NgModule({
  declarations: [
    AppComponent,
    MyContainerComponent,
    TopnavComponent,
    HeaderComponent,
    Txtsec1Component,
    Txtsec2Component,
    DatabindComponent,
    ClassStyleComponent,
    EventbindingComponent,
    TwoWayDatabindComponent,
    NgifComponent,
    NgswitchComponent,
    NgforComponent,
    HomeComponent,
    AboutComponent,
    ProductComponent,
    ContactComponent,
    LoginComponent,
    PagenotfoundComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    RouterModule.forRoot(appRouters)

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
