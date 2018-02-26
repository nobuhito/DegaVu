<script type="text/x-template" id="app-listview">
    <article class="card-content">
        <div v-if="!item.adListLayoutKey" class="media">
            <div class="media-left">
                <figure class="image" style="max-width:120px">
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
        <ins v-else class="adsbygoogle" style="display:block" data-ad-format="fluid"
             :data-ad-layout-key="item.adListLayoutKey" :data-ad-client="item.adClientCode"
             :data-ad-slot="item.adSlotCode"></ins>
    </article>
</script>

<script>
    Vue.component("app-listview", {
        template: "#app-listview",
        props: ["item"],
        methods: {
        }
    });
</script>