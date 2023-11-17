import { Component, OnInit, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaceSnap } from '../models/face-snap-model';
import { FaceSnapsService } from '../services/face-snap.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;
  buttonText!: string;

  constructor(private faceSnapsService: FaceSnapsService, private router: Router){}
  

  ngOnInit() {
    this.buttonText = "oh Snap";
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

  onViewFaceSnap() {
    this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`)
  }
}
