import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ZakaSharedModule } from 'app/shared/shared.module';
import { DepartmentComponent } from './department.component';
import { DepartmentDetailComponent } from './department-detail.component';
import { DepartmentUpdateComponent } from './department-update.component';
import { DepartmentDeleteDialogComponent } from './department-delete-dialog.component';
import { departmentRoute } from './department.route';

@NgModule({
  imports: [ZakaSharedModule, RouterModule.forChild(departmentRoute)],
  declarations: [DepartmentComponent, DepartmentDetailComponent, DepartmentUpdateComponent, DepartmentDeleteDialogComponent],
  entryComponents: [DepartmentDeleteDialogComponent],
})
export class ZakaDepartmentModule {}
