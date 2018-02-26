<script type="text/x-template" id="app-cardview">
    <article>
        <div v-if="!item.adCardLayoutKey" @click="$emit('select-item', i)">
            <div class="card-image">
                <figure class="image">
                    <img :src="item.img">
                </figure>
            </div>

            <div class="card-content">
                <div class="content">
                    <p class="title is-4">
                        {{ item.title }}
                    </p>
                    <p class="subtitle is-6">
                        {{ item.description }}
                    </p>
                    <a class="button is-text" @click.stop :href="item.link">{{ item.link }}</a>
                </div>
            </div>
        </div>
        <ins v-else class="adsbygoogle" style="display:block" data-ad-format="fluid"
            :data-ad-layout-key="item.adCardLayoutKey" :data-ad-client="item.adClientCode"
            :data-ad-slot="item.adSlotCode"></ins>
    </article>
</script>

<script>
    Vue.component("app-cardview", {
        template: "#app-cardview",
        props: ["item", "i"],
        methods: {
        }
    });
</script>

<style>
    .card.column {
        min-width: 300px;
        max-width: 800px;
        margin: 1rem;
        overflow: hidden;
    }
</style>