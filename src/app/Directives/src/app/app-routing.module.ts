import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AccFormComponent } from "./acc-form/acc-form.component";
import { AppComponent } from "./app.component";

const routes: Routes = [{ path: "kbc", component: AccFormComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
