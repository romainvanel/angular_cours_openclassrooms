import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaceSnap } from '../models/face-snap-model';
import { FaceSnapComponent } from '../face-snap/face-snap.component';
import { FaceSnapsService } from '../services/face-snap.services';

@Component({
  selector: 'app-face-snap-list',
  standalone: true,
  imports: [CommonModule, FaceSnapComponent],
  templateUrl: './face-snap-list.component.html',
  styleUrl: './face-snap-list.component.scss'
})
export class FaceSnapListComponent {
  faceSnaps!: FaceSnap[];

  constructor(private faceSnapService: FaceSnapsService) { }

  ngOnInit() {
    this.faceSnaps = this.faceSnapService.getAllFaceSnaps();

  }
}