<script type="text/x-template" id="app-navbar">
    <div class="navbar-wrap">
        <nav class="navbar level container is-flued is-mobile is-transparent"  style="display: flex;">
            <div class="navbar-brand">
                <div class="navbar-item has-text-weight-semibold has-text-grey-dark is-size-4">
                    {{ appName }}
                </div>
            </div>
            <div class="navbar-end">
                <slot name="end"></slot>
            </div>
        </nav>
    </div>
</script>


<script>
    Vue.component("app-navbar", {
        template: "#app-navbar",
        props: ["appName"],
        data: function () {
            return {
            }
        },
        methods: {
        }
    });
</script>


<style>
    .navbar-wrap {
        border-bottom: 1px solid #C3c3c3;
    }
</style>