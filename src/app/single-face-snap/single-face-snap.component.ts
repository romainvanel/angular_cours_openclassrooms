import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaceSnap } from '../models/face-snap-model';
import { FaceSnapsService } from '../services/face-snap.services';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-single-face-snap',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './single-face-snap.component.html',
  styleUrl: './single-face-snap.component.scss'
})
export class SingleFaceSnapComponent {
  faceSnap!: FaceSnap;
  buttonText!: string;

  constructor(private faceSnapsService: FaceSnapsService, 
    private route: ActivatedRoute){}
  

  ngOnInit() {
    this.buttonText = "oh Snap";
    const faceSnapId = +this.route.snapshot.params['id'];
    this.faceSnap = this.faceSnapsService.getFaceSnapById(faceSnapId);
  }

  onSnap() {
    if (this.buttonText === "oh Snap"){
    this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'snap');
    this.buttonText = "Oops, un Snap!";
    } else {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'unsnap')
      this.buttonText = "oh Snap";
    }
  }
}


