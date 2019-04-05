import { Component, OnInit } from "@angular/core";
import { Plugins, AppUrlOpen } from "@capacitor/core";
const { App } = Plugins;

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage implements OnInit {
  data: AppUrlOpen = <AppUrlOpen>{};
  ngOnInit() {
    App.addListener("appUrlOpen", (data: AppUrlOpen) => {
      alert(`data: ${JSON.stringify(data)}`);
      this.data = data;
    });
  }
}
