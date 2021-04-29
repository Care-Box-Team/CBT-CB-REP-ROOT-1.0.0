import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@single-spa/welcome",
  app: () =>
    System.import(
      "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
    ),
  activeWhen: ["/test"],
});

registerApplication({
  name: "@CB-REA",
  app: () => System.import("@CB/REA"),
  activeWhen: ["/client"],
});

registerApplication({
  name: "@CB-ANG",
  app: () => System.import("@CB/ANG"),
  activeWhen: ["/manager"],
});

// registerApplication({
//   name: "@CBT/navbar",
//   app: () => System.import("@CBT/navbar"),
//   activeWhen: ["/"]
// });

start({
  urlRerouteOnly: true,
});
