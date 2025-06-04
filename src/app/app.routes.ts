import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { QuienesSomosComponent } from './pages/quienes-somos/quienes-somos.component';
import { ValoresCorpoComponent } from './pages/valores-corpo/valores-corpo.component';
import { PoliticasComponent } from './pages/politicas/politicas.component';
import { XtrimCuentaComponent } from './pages/xtrim-cuenta/xtrim-cuenta.component';
import { NoticiasComponent } from './pages/noticias/noticias.component';
import { SaludComponent } from './pages/salud/salud.component';
import { BeneficiosCorpoComponent } from './pages/beneficios-corpo/beneficios-corpo.component';
import { ManualMarcaComponent } from './pages/manual-marca/manual-marca.component';

export const routes: Routes = [
    { path: '', component: InicioComponent },
    { path: 'quienes-somos', component: QuienesSomosComponent},
    { path: 'valores-corpo', component: ValoresCorpoComponent },
    { path: 'politicas', component: PoliticasComponent },
    { path: 'xtrim-cuenta', component: XtrimCuentaComponent },
    { path: 'noticias', component: NoticiasComponent },
    { path: 'salud', component: SaludComponent },
    { path: 'beneficios-corpo', component: BeneficiosCorpoComponent },
    { path: 'manual-marca', component: ManualMarcaComponent },
];
