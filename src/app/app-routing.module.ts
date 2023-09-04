import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './components/main-page/main-page.component';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
  },
  {
    path: 'clima-fetch',
    loadChildren: () =>
      import('src/app/http-fetch/http-fetch-page.module').then(
        (m) => m.HttpFetchPageModule
      ),
  },
  {
    path: 'clima-axios',
    loadChildren: () =>
      import('src/app/http-axios/http-axios-page.module').then(
        (m) => m.HttpAxiosPageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
