<script type="text/x-template" id="app-listview">
    <div class="card-content">
        <div class="media">
            <div class="media-left">
                <figure class="image is-64x64">
                    <img :src="item.img">
                </figure>
            </div>

            <div class="media-content">
                <p>
                    <span class="title is-size-4">{{ item.title }}</span>
                    <a class="button is-text" @click.stop :href="item.link">{{ item.link }}</a>
                </p>
                <p class="subtitle is-size-6">
                    {{ item.description }}
                </p>
            </div>
        </div>
    </div>
</script>

<script>
    Vue.component("app-listview", {
        template: "#app-listview",
        props: ["item"],
        methods: {
        }
    });
</script>