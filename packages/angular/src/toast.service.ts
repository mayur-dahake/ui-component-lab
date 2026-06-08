// @ts-nocheck
import { Injectable } from "@angular/core";
import { createToast } from "mayvio-ui/scripts/components/toast.js";

/**
 * MayvioToastService
 * Programmatic Angular service to trigger toast notifications across application views.
 */
@Injectable({
  providedIn: "root"
})
export class MayvioToastService {
  show(type: "success" | "error" | "warning" | "info", message?: string) {
    createToast(type, message);
  }

  success(message: string) {
    this.show("success", message);
  }

  error(message: string) {
    this.show("error", message);
  }

  warning(message: string) {
    this.show("warning", message);
  }

  info(message: string) {
    this.show("info", message);
  }
}
