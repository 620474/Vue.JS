let app = Vue.createApp({
    data() {
        return {
            jsonPost: [],
            search: '',
            text: 'Нажмите, чтобы изменить',
            input: true,
            newText: "",

        }
    },
    methods: {
        change() {
            this.input = !this.input;
            this.text = this.newText;
        }
    },
    mounted() {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res => {
                return res.json()
            })
            .then((data) => {
                this.jsonPost = data;
            }).catch(err => console.log(err));
    },
});
let vm = app.mount("#app");
