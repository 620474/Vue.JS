const app = Vue.createApp({
  data() {
    return {
      tasks: [{ text: "Купить хлеб" }],
    };
  },
});

app.component("todo__list", {
  data() {
    return {};
  },
  template: `
  <div class="input__main">
  <div class="title">To Do App</div>
  <div class="input__group">
      <input class="input__text" type="text">
      <div class="input__button">
          Добавить
      </div>
  </div>
</div>
    `,
});

app.mount("#app");
