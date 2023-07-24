import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidatedFormComponent } from './validated-form/validated-form.component';
import { SuccessScreenComponent } from './success-screen/success-screen.component';

const routes: Routes = [{
  title: 'Форма валидации',
  path: '',
  pathMatch: 'prefix',
  component: ValidatedFormComponent,
}, {
  title: 'Успех!',
  path: 'success',
  component: SuccessScreenComponent,
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
