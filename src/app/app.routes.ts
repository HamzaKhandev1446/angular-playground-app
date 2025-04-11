import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: 'playground',
    loadComponent: () =>
      import('./playground/playground.component').then(m => m.PlaygroundComponent),
    children: [
      {
        path: 'frontward-solutions',
        loadComponent: () =>
          import('./frontward-solution/frontward-solution.component').then(m => m.FrontwardSolutionComponent),
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'frontward-solutions'   // Optional: Default child route
      }
    ]
  },
  {
    path: '**',
    redirectTo: '',
  }
];
