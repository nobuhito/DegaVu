<script type="text/x-template" id="app-addpanel">
    <div>
        <slot></slot>
        <div class="modal" :class="(isShow)? 'is-active': ''">
            <div class="modal-background"></div>
            <div class="modal-card">
                <section class="modal-card-body">
                    <div class="content">
                        <div class="title is-size-5">
                            アイテム追加
                        </div>
                        <div  v-for="(field, i) in fields" class="field is-horizontal">
                            <div class="field-label is-small">
                                <label class="label">{{ field.label }}</label>
                            </div>
                            <div class="field-body">
                                <div class="field">
                                    <div class="control">
                                        <input class="input is-small" type="text" :placeholder="field.placeholder" v-model="item[field.id]">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="level is-mobile">
                        <div class="level-left"></div>
                        <div class="level-right">
                            <div class="level-item has-text-centered">
                                <p><button class="button is-text" @click="close()">キャンセル</button></p>
                                <p><button class="button is-primary" @click="addItem()">追加</button></p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </div>
</script>

<script>
    Vue.component("app-addpanel", {
        template: "#app-addpanel",
        props: ["isShow"],
        data: function () {
            return {
                fields: [
                    { id: "title", label: "Title", placeholder: "Title" },
                    { id: "description", label: "Description", placeholder: "description" },
                    { id: "link", label: "Link", placeholder: "URL for Web site" },
                    { id: "img", label: "Image", placeholder: "URL for image" },
                ],
                item: null
            }
        },
        created: function () {
            this.clearItem();
        },
        methods: {
            close: function () {
                this.$emit("set-prop", "isShowAddPanel", false);
            },
            addItem: function () {
                this.$emit("add-item", this.item);
                this.clearItem();
                this.close();

            },
            clearItem: function () {
                this.item = { title: "", description: "", link: "", img: "" };
            }
        }
    });

</script>

<style>
    .app-addpanel #dropzone {
        height: 300px;
    }
</style>