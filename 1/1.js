let app = Vue.createApp({
    data() {
        return {
            tasks: [],
            input: '',
            editInput:'',
            complete: '',
            edit: '',
            visible: false,
        }
    },

    methods: {
        addTask() {
            if (this.input.trim() !== '') {
                this.tasks.push({name: this.input, complete: false});

                this.input = '';
            }
        },

        editTask(e) {
            this.visible = !this.visible;
            this.tasks[e].name = this.editInput;

        },


        deleteTask(e) {
            this.tasks.splice(e, 1);
        },


        completeTask(e) {
            this.tasks[e].complete = !this.tasks[e].complete;
        }
    },

});

let vm = app.mount("#app");

