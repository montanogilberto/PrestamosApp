import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { NologinGuard } from './guards/nologin.guard';

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
    canActivate: [AuthGuard],
    loadChildren: () => import('./clientes/clientes.module').then( m => m.ClientesPageModule)
  },
  {
    path: 'clientes-detail/:id',
    canActivate: [AuthGuard],
    loadChildren: () => import('./clientes-detail/clientes-detail.module').then( m => m.ClientesDetailPageModule)
  },
  {
    path: 'clientes-detail',
    canActivate: [AuthGuard],
    loadChildren: () => import('./clientes-detail/clientes-detail.module').then( m => m.ClientesDetailPageModule)
  },
  {
    path: 'domicilios/:id',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/domicilios/domicilios.module').then( m => m.DomiciliosPageModule)
  },
  {
    path: 'forma-pagos/:id',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/forma-pagos/forma-pagos.module').then( m => m.FormaPagosPageModule)
  },
  {
    path: 'avales/:id',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/avales/avales.module').then( m => m.AvalesPageModule)
  },
  {
    path: 'adjuntos/:id',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/adjuntos/adjuntos.module').then( m => m.AdjuntosPageModule)
  },
  {
    path: 'informacion-personal/:id',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/informacion-personal/informacion-personal.module').then( m => m.InformacionPersonalPageModule)
  },
  {
    path: 'login',
    canActivate: [NologinGuard],
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'domicilio-detail/:id',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/domicilio-detail/domicilio-detail.module').then( m => m.DomicilioDetailPageModule)
  },
  {
    path: 'aval-detail',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/aval-detail/aval-detail.module').then( m => m.AvalDetailPageModule)
  },
  {
    path: 'forma-pago-detail',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/forma-pago-detail/forma-pago-detail.module').then( m => m.FormaPagoDetailPageModule)
  },
  {
    path: 'registro',
    canActivate: [NologinGuard],
    loadChildren: () => import('./components/registro/registro.module').then( m => m.RegistroPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
