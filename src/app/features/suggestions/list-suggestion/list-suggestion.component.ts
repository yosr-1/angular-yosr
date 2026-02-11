import { Component } from '@angular/core';
import { Suggestion } from '../../../models/suggestion';

@Component({
  selector: 'app-suggestion-list',
  templateUrl: './list-suggestion.component.html'
})
export class SuggestionListComponent {
  suggestions: Suggestion[] = [
    { id: 1, title: 'Improve UI Design', description: 'Modernize the user interface', category: 'UI/UX', date: new Date('2024-01-15'), status: 'pending', nbLikes: 12 },
    { id: 2, title: 'Add Dark Mode', description: 'Implement dark mode theme', category: 'Feature', date: new Date('2024-02-01'), status: 'approved', nbLikes: 25 },
    { id: 3, title: 'Performance Optimization', description: 'Optimize loading times', category: 'Performance', date: new Date('2024-02-10'), status: 'in-progress', nbLikes: 8 }
  ];
}
