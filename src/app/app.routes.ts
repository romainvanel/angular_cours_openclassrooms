import { Routes } from '@angular/router';
import { FaceSnapListComponent } from './face-snap-list/face-snap-list.component';
import { LandinPageComponentComponent } from './landin-page-component/landin-page-component.component';
import { SingleFaceSnapComponent } from './single-face-snap/single-face-snap.component';

export const routes: Routes = [
    {path: 'facesnaps/:id', component: SingleFaceSnapComponent},
    {path: '', component: LandinPageComponentComponent},
    {path: 'facesnaps', component: FaceSnapListComponent}
];
