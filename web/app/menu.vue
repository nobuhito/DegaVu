<script type="text/x-template" id="app-menu">
    <div class="navbar-item">
        <div v-if="user==null">
            <span class="icon">
                <i class="fas fa-spiner"></i>
            </span>
        </div>
        <div v-else>
            <span v-if="user==''">
                <button class="button" @click="login()">Login</button>
            </span>
            <span v-else>
                <div class="dropdown is-right" :class="(isShowMenu)? 'is-active': ''">
                    <div class="dropdown-trigger">
                        <button class="button" aria-haspopup="true" aria-controls="dropdown-menu" @click="toggleMenu()">
                            <span class="icon">
                                <i class="fas fa-ellipsis-v"></i>
                            </span>
                        </button>
                    </div>
                    <div class="dropdown-menu" id="dropdown-menu" role="menu">
                        <div class="dropdown-content">
                            <div class="dropdown-item">
                                <div class="field is-horizontal">
                                    <div class="field-label is-normal">
                                        <label class="label">Style:</label>
                                    </div>
                                    <div class="field-body">
                                        <div class="field has-addons">
                                            <p v-for="(style, i) in viewItemLayouts" class="control">
                                                <button class="button" :class="(showItemLayout==style)? 'is-selected is-success': ''" @click="changeViewStyle(style)">
                                                    {{ style }}
                                                </button>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr class="dropdown-divider">
                            <div class="dropdown-item">
                                <img :src="user.photoURL" class="user-icon">
                                <button class="button is-text" @click="logout()">Logout</button>
                            </div>
                        </div>
                    </div>
                </div>
            </span>
        </div>
    </div>
</script>

<script>
    Vue.component("app-menu", {
        template: "#app-menu",
        props: ["user", "viewItemLayouts", "showItemLayout"],
        data: function () {
            return {
                isShowMenu: false
            }
        },
        methods: {
            changeViewStyle: function (style) {
                console.log(style);
                this.$emit("set-prop", "showItemLayout", style);
                this.isShowMenu = false;
            },
            toggleMenu: function () {
                this.isShowMenu = !this.isShowMenu;
            },
            login: function () {
                googleAuthLogin((user) => {
                    this.$emit("set-prop", "user", user);
                    this.isShowMenu = false;
                });
            },
            logout: function () {
                firebase.auth().signOut()
                    .then(() => {
                        this.$emit("set-prop", "user", "");
                        this.isShowMenu = false;
                    })
                    .catch(err => {
                        console.log(err);
                    })
            }
        }
    });
</script>

<script>
    function googleAuthLogin(cb) {
        var provider = new firebase.auth.GoogleAuthProvider();
        provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
        firebase.auth().signInWithPopup(provider).then(function (result) {
            var token = result.credential.accessToken;
            let user = result.user;
            cb(user);
            localStorage.setItem("user", JSON.stringify(user));
        }).catch(function (error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            var email = error.email;
            var credential = error.credential;
            console.log(errorCode, errorMessage);
        });
    }
</script>

<style>
    .app-menu .menu-title {
        padding-right: 1rem;
    }
</style>