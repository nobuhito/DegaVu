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
