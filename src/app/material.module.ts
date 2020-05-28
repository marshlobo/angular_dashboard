import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatButtonModule } from "@angular/material/button";
import { MatMenuModule } from "@angular/material/menu";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatCardModule } from "@angular/material/card";
import { MatGridListModule } from "@angular/material/grid-list";

const MaterialComponents = [
  MatToolbarModule,
  MatIconModule,
  MatListModule,
  MatSidenavModule,
  MatButtonModule,
  MatMenuModule,
  MatTooltipModule,
  MatCardModule,
  MatGridListModule,
];

@NgModule({
  declarations: [],
  imports: [CommonModule, MaterialComponents],
  exports: [MaterialComponents],
})
export class MaterialModule {}
