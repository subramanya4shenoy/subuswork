import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogoPageComponent } from './frame-work/components/page/logo-page/logo-page.component';  // Add your component here
import { ElementPageComponent } from './frame-work/components/page/element-page/element-page.component';  // Add your component here
import { ExtraPageComponent } from './frame-work/components/page/extra-page/extra-page.component';
import { MePageComponent } from './frame-work/components/page/me-page/me-page.component';

// This is my case
const routes: Routes = [
    {
        path: 'logo/:id',
        component: LogoPageComponent,
        pathMatch: 'full'
    },
    {
        path: 'extra/:id',
        component: ExtraPageComponent,
        pathMatch: 'full'
    },
    {
        path: 'element/login-one',
        loadChildren: './features/elements/login-page-one/login-page-one.module#LoginPageOneModule'
    },
    {
        path: 'diary/:id',
        component: MePageComponent,
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
