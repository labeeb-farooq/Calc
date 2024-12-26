import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./routes/calculator/calculator.module').then(
        (m) => m.CalculatorModule
      ),
  },
];
