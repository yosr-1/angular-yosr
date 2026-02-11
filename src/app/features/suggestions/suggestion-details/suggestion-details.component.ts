import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-suggestion-details',
  templateUrl: './suggestion-details.component.html'
})
export class SuggestionDetailsComponent implements OnInit {
  id!: string;
  suggestionDetail!: string;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')!;
    this.suggestionDetail = `Détails pour la suggestion #${this.id}`;
  }

  goBack(): void {
    this.router.navigate(['/suggestions']);
  }
}
