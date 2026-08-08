import { Component, inject } from '@angular/core';
import { SideMenuHeader } from "./side-menu-header/side-menu-header";
import { SideMenuOptions } from "./side-menu-options/side-menu-options";
import { UiStateService } from '../../../shared/services/ui-state.service';

@Component({
  selector: 'gifs-side-menu',
  imports: [SideMenuHeader, SideMenuOptions],
  templateUrl: './side-menu.html',
})
export class SideMenu {
  uiState = inject(UiStateService);
}
