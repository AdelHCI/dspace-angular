import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { ItemPageModule } from '../../+item-page/item-page.module';
import { JournalComponent } from './item-pages/journal/journal.component';
import { JournalIssueComponent } from './item-pages/journal-issue/journal-issue.component';
import { JournalVolumeComponent } from './item-pages/journal-volume/journal-volume.component';
import { JournalListElementComponent } from './item-list-elements/journal/journal-list-element.component';
import { JournalIssueListElementComponent } from './item-list-elements/journal-issue/journal-issue-list-element.component';
import { JournalVolumeListElementComponent } from './item-list-elements/journal-volume/journal-volume-list-element.component';
import { TooltipModule } from 'ngx-bootstrap';
import { JournalIssueGridElementComponent } from './item-grid-elements/journal-issue/journal-issue-grid-element.component';
import { JournalVolumeGridElementComponent } from './item-grid-elements/journal-volume/journal-volume-grid-element.component';
import { JournalGridElementComponent } from './item-grid-elements/journal/journal-grid-element.component';
import { JournalSearchResultListElementComponent } from './item-list-elements/search-result-list-elements/journal/journal-search-result-list-element.component';
import { JournalSearchResultGridElementComponent } from './item-grid-elements/search-result-grid-elements/journal/journal-search-result-grid-element.component';
import { JournalIssueSearchResultListElementComponent } from './item-list-elements/search-result-list-elements/journal-issue/journal-issue-search-result-list-element.component';
import { JournalVolumeSearchResultListElementComponent } from './item-list-elements/search-result-list-elements/journal-volume/journal-volume-search-result-list-element.component';
import { JournalIssueSearchResultGridElementComponent } from './item-grid-elements/search-result-grid-elements/journal-issue/journal-issue-search-result-grid-element.component';
import { JournalVolumeSearchResultGridElementComponent } from './item-grid-elements/search-result-grid-elements/journal-volume/journal-volume-search-result-grid-element.component';
import { JournalVolumeSidebarSearchListElementComponent } from './item-list-elements/sidebar-search-list-elements/journal-volume/journal-volume-sidebar-search-list-element.component';
import { JournalIssueSidebarSearchListElementComponent } from './item-list-elements/sidebar-search-list-elements/journal-issue/journal-issue-sidebar-search-list-element.component';
import { JournalSidebarSearchListElementComponent } from './item-list-elements/sidebar-search-list-elements/journal/journal-sidebar-search-list-element.component';

const ENTRY_COMPONENTS = [
  JournalComponent,
  JournalIssueComponent,
  JournalVolumeComponent,
  JournalListElementComponent,
  JournalIssueListElementComponent,
  JournalVolumeListElementComponent,
  JournalIssueGridElementComponent,
  JournalVolumeGridElementComponent,
  JournalGridElementComponent,
  JournalSearchResultListElementComponent,
  JournalIssueSearchResultListElementComponent,
  JournalVolumeSearchResultListElementComponent,
  JournalIssueSearchResultGridElementComponent,
  JournalVolumeSearchResultGridElementComponent,
  JournalSearchResultGridElementComponent,
  JournalVolumeSidebarSearchListElementComponent,
  JournalIssueSidebarSearchListElementComponent,
  JournalSidebarSearchListElementComponent,
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    TooltipModule.forRoot(),
    ItemPageModule
  ],
  declarations: [
    ...ENTRY_COMPONENTS
  ],
  entryComponents: [
    ...ENTRY_COMPONENTS
  ]
})
export class JournalEntitiesModule {

}
