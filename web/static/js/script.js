(function() {
  axios
    .get("/apps/")
    .then(res => {
      let components = res.data;
      for (const i in components) {
        const component = components[i];

        var link = document.createElement("link");
        link.rel = "import";
        link.href = "/app/" + component + ".vue";
        link.onload = event => {
          let link = document.querySelector(
            'link[href="/app/' + component + '.vue"]'
          ).import;

          let template = link.querySelector("#app-" + component);
          if (template) {
            document
              .querySelector("#templates")
              .appendChild(template.cloneNode(true));
          }

          let style = link.querySelector("style");
          if (style) {
            document.head.appendChild(style);
          }
        };
        document.head.appendChild(link);
      }
    })
    .catch(err => {
      console.log(err);
    });
})();

var appendGoogleAnalytics = function(app) {
  try {
    let trackingID = app.config.analytics.trackingID;
    let script = document.createElement("script");
    script.async = true;
    script.src = "https://www.googletagmanager.com/gtag/js?id=" + trackingID;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    let gtag = function() {
      dataLayer.push(arguments);
    };
    gtag("js", new Date());
    gtag("config", trackingID);
  } catch (e) {
    console.log("could not get Google analytics tracking id");
  }
};

var appendAdSense = function(app) {
  try {
    let script = document.createElement("script");
    script.async = true;
    script.src = "//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
    document.head.appendChild(script);

    app.items.splice(1, 0, {
      adClientCode: app.config.adsense.clientCode,
      adSlotCode: app.config.adsense.slotCode,
      adListLayoutKey: app.config.adsense.layoutKey.list,
      adCardLayoutKey: app.config.adsense.layoutKey.card
    });
  } catch (e) {
    console.log("could not insert of adsense");
    console.log(e);
  }
};
