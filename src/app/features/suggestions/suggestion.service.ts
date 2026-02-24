import { Injectable } from '@angular/core';
import { Suggestion } from '../../models/suggestion';

@Injectable({
  providedIn: 'root'
})
export class SuggestionService {
  private suggestions: Suggestion[] = [
    {
      id: 1,
      title: 'Moderniser cafeteria',
      description: 'Proposition pour moderniser la cafétéria et améliorer la qualité des repas servis aux étudiants.',
      category: 'Restauration et cafétéria',
      date: new Date('2025-01-15'),
      status: 'en attente',
      nbLikes: 12
    },
    {
      id: 2,
      title: 'Ameliorer wifi campus',
      description: 'Améliorer la couverture WiFi sur tout le campus pour faciliter le travail des étudiants.',
      category: 'Technologie et services numériques',
      date: new Date('2025-01-20'),
      status: 'en attente',
      nbLikes: 25
    },
    {
      id: 3,
      title: 'Recyclage campus vert',
      description: 'Mettre en place un système de recyclage et de compostage sur tout le campus pour réduire les déchets.',
      category: 'Hygiène et environnement',
      date: new Date('2025-01-25'),
      status: 'en attente',
      nbLikes: 8
    }
  ];

  getSuggestions(): Suggestion[] {
    return this.suggestions;
  }

  addSuggestion(suggestion: Suggestion): void {
    const newId = this.suggestions.length > 0
      ? Math.max(...this.suggestions.map(s => s.id)) + 1
      : 1;
    suggestion.id = newId;
    this.suggestions.push(suggestion);
  }
}
