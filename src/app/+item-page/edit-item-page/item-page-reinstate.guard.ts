import { Injectable } from '@angular/core';
import { DsoPageFeatureGuard } from '../../core/data/feature-authorization/feature-authorization-guard/dso-page-feature.guard';
import { Item } from '../../core/shared/item.model';
import { ItemPageResolver } from '../item-page.resolver';
import { AuthorizationDataService } from '../../core/data/feature-authorization/authorization-data.service';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { FeatureID } from '../../core/data/feature-authorization/feature-id';
import { of as observableOf } from 'rxjs';
import { AuthService } from '../../core/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
/**
 * Guard for preventing unauthorized access to certain {@link Item} pages requiring reinstate rights
 */
export class ItemPageReinstateGuard extends DsoPageFeatureGuard<Item> {
  constructor(protected resolver: ItemPageResolver,
              protected authorizationService: AuthorizationDataService,
              protected router: Router,
              protected authService: AuthService) {
    super(resolver, authorizationService, router, authService);
  }

  /**
   * Check reinstate authorization rights
   */
  getFeatureID(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<FeatureID> {
    return observableOf(FeatureID.ReinstateItem);
  }
}
