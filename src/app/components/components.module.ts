import { NgModule } from "@angular/core"
import { FormsModule } from "@angular/forms"
import { CommonModule } from "@angular/common"

import { AngularMaterialModule } from "../angular-material/angular-material.module"
import { UserDetailsComponent } from './user-details/user-details.component'
import { FilterComponent } from './filter/filter.component'

@NgModule({
    declarations: [
        FilterComponent,
        UserDetailsComponent
    ],
    imports: [
        AngularMaterialModule,
        UserDetailsComponent,
        FilterComponent,
        FormsModule,
        CommonModule
    ],
    exports: [
        UserDetailsComponent,
        FilterComponent
    ],
})
export class ComponentsModule { }
