import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'perfil',
    children:[
      {
        path: '',
        loadChildren: () => import('./login/perfil/perfil.module').then(m => m.PerfilPageModule)
      },
      {
        path: 'editar',
        children: [
          {
            path: ':usuarioID',
            loadChildren: () => import('./login/perfil/editar/editar.module').then(m => m.EditarPageModule)
          }
        ]
      },
    ]
  },
  {
    path: 'registro',
    loadChildren: () => import('./login/registro/registro.module').then(m => m.RegistroPageModule)
  },
  {
    path: 'logout',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'habitacion',
    data: { preload: true } ,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./habitacion/habitacion.module').then(
            m => m.HabitacionPageModule
          )
      },
      {
        path: ':habitacionId',
        loadChildren: () => import('./habitacion/detalle/detalle.module').then(
          m => m.DetallePageModule
        )
      },
      {
        path: 'crear',
        loadChildren: () => import('./habitacion/crear/crear.module').then( m => m.CrearPageModule)
      },
      {
        path: ':habitacionId/editar',
        loadChildren: () => import('./habitacion/editar/editar.module').then( m => m.EditarPageModule)
      },
      {
        path: 'editar',
        children: [
          {
            path: ':habitacionId',
            loadChildren: () => import('./habitacion/editar/editar.module').then( m => m.EditarPageModule)
          }
        ]
      },
      {
        path: ':habitacionId/crear-reservacion',
        loadChildren: () => import('./habitacion/crear-reservacion/crear-reservacion.module').then( m => m.CrearReservacionPageModule)
      },
      {
        path: 'crear-reservacion',
        children: [
          {
            path: ':habitacionId',
            loadChildren: () => import('./habitacion/crear-reservacion/crear-reservacion.module').then( m => m.CrearReservacionPageModule)
          }
        ]
      },
      {
        path: 'reservacion',
        loadChildren: () => import('./habitacion/reservacion/reservacion.module').then( m => m.ReservacionPageModule)
      },
      {
        path: ':habitacionId/detalle',
        loadChildren: () => import('./habitacion/detalle-reservacion/detalle-reservacion.module').then( m => m.DetalleReservacionPageModule)
      },
      {
        path: 'detalle-reservacion',
        children: [
          {
            path: ':habitacionId',
            loadChildren: () =>
            import('./habitacion/detalle-reservacion/detalle-reservacion.module').then( m => m.DetalleReservacionPageModule)
          }
        ]
      }
    ]
  },
  {
    path: 'usuario',
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./usuario/usuario.module').then(
            m => m.UsuarioPageModule
          )
      },
      {
        path: ':usuarioId',
        loadChildren: () => import('./usuario/detalle/detalle.module').then(
          m => m.DetallePageModule
        )
      },
      {
        path: 'crear',
        loadChildren: () => import('./usuario/crear/crear.module').then( m => m.CrearPageModule)
      },
      {
        path: ':usuarioId/editar',
        loadChildren: () => import('./usuario/editar/editar.module').then( m => m.EditarPageModule)
      },
      {
        path: 'editar',
        children: [
          {
            path: ':usuarioId',
            loadChildren: () => import('./usuario/editar/editar.module').then( m => m.EditarPageModule)
          }
        ]
      }
    ]
  },
  {
    path: 'buscar',
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./buscar/buscar.module').then(
            m => m.BuscarPageModule
          )
      },
      {
        path: ':resultadoID',
        loadChildren: () => import('./buscar/resultados/resultados.module').then(
          m => m.ResultadosPageModule
        )
      },
      {
        path: ':resultadoID/:habitacionID',
        loadChildren: () => import('./buscar/resultados/detalle/detalle.module').then(
          m => m.DetallePageModule
        )
      }
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
