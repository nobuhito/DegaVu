<script type="text/x-template" id="app-search">
    <div>
            <p class="control has-icons-left is-hidden-mobile">
                <input class="input" type="text" placeholder="Search" v-model="words">
                <span class="icon is-small is-left">
                    <i class="fas fa-search"></i>
                </span>
            </p>
            <p class="control is-hidden-tablet">
                <input class="input" type="text" placeholder="Search" v-model="words" style="width:100px; min-width:30vw;">
            </p>
    </div>
</script>

<script>
    Vue.component("app-search", {
        template: "#app-search",
        data: function () {
            return {
                words: "",
            }
        },
        watch: {
            words: function (val) {
                this.$emit("set-prop", "searchWords", val);
            }
        }
    });
</script>