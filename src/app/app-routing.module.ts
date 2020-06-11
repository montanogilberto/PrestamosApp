import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/inicio',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  { 
    path: 'news',
    loadChildren: () => import('./news/news.module').then( m => m.NewsPageModule)
  },
  {
    path: 'clientes',
    loadChildren: () => import('./clientes/clientes.module').then( m => m.ClientesPageModule)
  },
  {
    path: 'clientes-detail/:id',
    loadChildren: () => import('./clientes-detail/clientes-detail.module').then( m => m.ClientesDetailPageModule)
  },
  {
    path: 'clientes-detail',
    loadChildren: () => import('./clientes-detail/clientes-detail.module').then( m => m.ClientesDetailPageModule)
  },
  {
    path: 'domicilios/:id',
    loadChildren: () => import('./pages/domicilios/domicilios.module').then( m => m.DomiciliosPageModule)
  },
  {
    path: 'forma-pagos/:id',
    loadChildren: () => import('./pages/forma-pagos/forma-pagos.module').then( m => m.FormaPagosPageModule)
  },
  {
    path: 'avales/:id',
    loadChildren: () => import('./pages/avales/avales.module').then( m => m.AvalesPageModule)
  },
  {
    path: 'adjuntos/:id',
    loadChildren: () => import('./pages/adjuntos/adjuntos.module').then( m => m.AdjuntosPageModule)
  },
  {
    path: 'informacion-personal/:id',
    loadChildren: () => import('./pages/informacion-personal/informacion-personal.module').then( m => m.InformacionPersonalPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
