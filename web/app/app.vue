<script>
    var app = new Vue({
        el: "#vue-app",
        data: {
            // App config
            appName: "DegaVu",

            // user config
            user: "",

            // main items
            items: [
                {
                    img: "https://cloud.google.com/images/products/appengine/ecosystem.svg?hl=ja",
                    title: "Google App Engine",
                    description: "Google App Engine Go Standard Environment",
                    link: "https://cloud.google.com/appengine/docs/standard/go/?hl=ja"
                },
                {
                    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Golang.png/300px-Golang.png",
                    title: "Go",
                    description: "The Go Programming Language",
                    link: "https://golang.org/",
                },
                {
                    img: "https://jp.vuejs.org/images/logo.png",
                    title: "Vue.js",
                    description: "The Progressive JavaScript Framework",
                    link: "https://jp.vuejs.org/index.html",
                },
                {
                    img: "https://raw.githubusercontent.com/jgthms/bulma/master/docs/images/bulma-banner.png",
                    title: "Bulma",
                    description: "Bulma is a free and open source CSS framework based on Flexbox.",
                    link: "https://bulma.io/"
                }
            ],

            searchWords: "",
            searchedItems: null,

            detailItem: null,

            // action control
            isShowAddPanel: false,
            viewItemLayouts: ["list", "card"],
            showItemLayout: "list", // card or list

            // local config
            config: config
        },
        mounted: function () {
            document.title = this.appName;
            let user = JSON.parse(localStorage.getItem("user"));
            if (user) { this.user = user; }

            let app = this;
            appendGoogleAnalytics(app);
            appendAdSense(app);
            this.refreshAds();
        },
        watch: {
            user: function (val) {
                localStorage.setItem("user", JSON.stringify(val));
            },
            showItemLayout: function () {
                this.refreshAds();
            },
            searchWords: function (val) {
                if (val == "") {
                    this.searchedItems = null;
                    return;
                }

                this.searchedItems = this.items.filter(item => {
                    let words = [item.title, item.description, item.link].join(" ").toLocaleLowerCase();
                    return words.indexOf(val.toLocaleLowerCase()) > -1;
                });
            }
        },
        methods: {
            addItem: function (item) {
                this.items.unshift(item);
            },
            setProp: function (key, val) {
                this[key] = val;
            },
            selectItem: function (i) {
                this.detailItem = this.displayItems[i];
            },
            refreshAds: function () {
                let adsense = this.config.adsense;
                if (adsense.layoutKey && adsense.layoutKey[this.showItemLayout]) {
                    Vue.nextTick().then(function () {
                        (adsbygoogle = window.adsbygoogle || []).push({});
                    });
                }
            },
            displayItems: function () {
                return (this.searchedItems) ? this.searchedItems : this.items;
            }
        }
    });
</script>