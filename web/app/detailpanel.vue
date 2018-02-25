<script type="text/x-template" id="app-detailpanel">
    <div>
        <div class="background"></div>
        <iframe :src="detailLink" frameborder="0">load</iframe>
        <a class="delete is-large" @click="close()"></a>
    </div>
</script>

<script>
    Vue.component("app-detailpanel", {
        template: "#app-detailpanel",
        props: ["detailItem"],
        computed: {
            detailLink: function () {
                return (this.detailItem) ? this.detailItem.link : "";
            }
        },
        methods: {
            close: function () {
                this.$emit("set-prop", "detailItem", null);
            }
        }
    });
</script>

<style>
    .app-detailpanel .background {
        background-color: rgba(10, 10, 10, .86);
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
    }

    .app-detailpanel iframe {
        position: fixed;
        top: 2rem;
        left: 2rem;
        width: calc(100% - 4rem);
        height: calc(100% - 4rem);
        background-color: white;
    }

    .app-detailpanel .delete {
        position: fixed;
        top: calc(2rem - 16px);
        right: calc(2rem - 16px);
        border: 2px solid white;
        background-color: gray;
    }

    .app-detailpanel {
        -webkit-overflow-scrolling: touch;
    }
</style>