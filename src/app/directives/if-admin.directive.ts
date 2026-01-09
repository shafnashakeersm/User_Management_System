import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appIfAdmin]',
  standalone: true
})
export class IfAdminDirective {

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}

  @Input() set appIfAdmin(role: string) {
    this.viewContainer.clear();
    if (role === 'Admin') {
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
  }
}
