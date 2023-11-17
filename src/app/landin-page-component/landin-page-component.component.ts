import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-landin-page-component',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './landin-page-component.component.html',
  styleUrl: './landin-page-component.component.scss'
})
export class LandinPageComponentComponent {
  constructor(private router: Router) {}

  onContinue(): void {
    this.router.navigateByUrl('facesnaps');
  }
}
