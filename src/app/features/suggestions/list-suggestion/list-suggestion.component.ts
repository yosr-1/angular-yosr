import { Component } from '@angular/core';

@Component({
  selector: 'app-suggestion-list',
  templateUrl: './list-suggestion.component.html'
})
export class SuggestionListComponent {
  suggestions = [
    { id: 1, name: 'Suggestion 1' },
    { id: 2, name: 'Suggestion 2' },
    { id: 3, name: 'Suggestion 3' }
  ];
}
