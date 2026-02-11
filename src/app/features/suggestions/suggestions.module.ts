import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuggestionsRoutingModule } from './suggestions-routing.module';

// ⚡ IMPORTS CORRECTS SELON L'ARBORESCENCE
import { SuggestionListComponent } from './suggestion-list/suggestion-list.component';
import { SuggestionDetailsComponent } from './suggestion-details/suggestion-details.component';
import { ListSuggestionComponent } from './list-suggestion/list-suggestion.component';

@NgModule({
  declarations: [
    SuggestionListComponent,
    SuggestionDetailsComponent,
    ListSuggestionComponent
  ],
  imports: [
    CommonModule,
    SuggestionsRoutingModule
  ]
})
export class SuggestionsModule { }
