import { Subscription } from 'rxjs/Subscription';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ViewMode } from '../../+search-page/search-options.model';
import { SearchService } from './../../+search-page/search-service/search.service';

/**
 * Component to switch between list and grid views.
 */
@Component({
  selector: 'ds-view-mode-switch',
  styleUrls: ['./view-mode-switch.component.scss'],
  templateUrl: './view-mode-switch.component.html'
})
export class ViewModeSwitchComponent implements OnInit, OnDestroy {
  currentMode: ViewMode = ViewMode.List;
  viewModeEnum = ViewMode;
  private sub: Subscription;

  constructor(private searchService: SearchService) {
  }

  ngOnInit(): void {
    this.sub = this.searchService.getViewMode().subscribe((viewMode: ViewMode) => {
      this.currentMode = viewMode;
    });
  }

  switchViewTo(viewMode: ViewMode) {
    this.searchService.setViewMode(viewMode);
  }

  ngOnDestroy() {
    if (this.sub !== undefined) {
      this.sub.unsubscribe();
    }
  }
}
