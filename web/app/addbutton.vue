<script type="text/x-template" id="app-addbutton">
    <div>
        <a id="add" @click="add" v-show="isShow">
            <div class="plus">+</div>
        </a>
    </div>
</script>

<script>
    Vue.component("app-addbutton", {
        template: "#app-addbutton",
        props: ["isShow"],
        methods: {
            add: function () {
                this.$emit("set-prop", "isShowAddPanel", true);
            }
        }
    });
</script>

<style>
    .app-addbutton a#add {
        display: block;
        width: 56px;
        height: 56px;
        background: #E05049;
        text-align: center;
        border-radius: 50%;
        transition: .3s;
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, .12), 0 2px 2px 0 rgba(0, 0, 0, .24);
        position: fixed;
        right: 1rem;
        bottom: 1rem;
    }

    .app-addbutton a#add:hover {
        box-shadow: 0 4px 5px 0 rgba(0, 0, 0, .14), 0 1px 10px 0 rgba(0, 0, 0, .12), 0 2px 4px -1px rgba(0, 0, 0, .2);
    }

    .app-addbutton a#add .plus {
        color: white;
        line-height: 48px;
        vertical-align: middle;
        font-size: 3rem;
    }
</style>