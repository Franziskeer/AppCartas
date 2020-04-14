import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'cards',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../card-decks/card-decks.module').then(m => m.CardDecksPageModule)
          }
        ]
      },
      {
        path: 'about',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../about/about.module').then(m => m.AboutPageModule)
          }
        ]
      },
      {
        path: 'exit',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../exit/exit.module').then(m => m.ExitPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/cards',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/cards',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
