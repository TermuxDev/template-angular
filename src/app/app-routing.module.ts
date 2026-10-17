import { NgModule } from '@angular/core';
import {ExtraOptions, RouterModule, Routes} from '@angular/router';
import {MenuTabComponent} from "./layouts/menu-tab/menu-tab.component";

const routes: Routes = [
  {
    path: '',
    component: MenuTabComponent,
    children: [
      {
        path: '', redirectTo: 'home/dashboard', pathMatch: 'full',
      },
      {

        path: 'home/dashboard', loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule)
      }
    ]
  }

];


const routerOptions: ExtraOptions = {
  useHash: true,
  anchorScrolling: 'enabled',
  onSameUrlNavigation: 'reload',
  // ...any other options you'd like to use
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
