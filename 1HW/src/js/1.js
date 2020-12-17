let app = Vue.createApp({
    data: function(){
        return {
            sitename: 'Unofficial GOG-shop',
            product:{
                title: "Cyberpunk 2077",
                description:
                    "Cyberpunk 2077 приключенческая ролевая игра, действие которой происходит в мегаполисе Найт-Сити, где власть, роскошь и модификации тела ценятся выше всего. Вы играете за V, наёмника в поисках уникального устройства, позволяющего обрести бессмертие. Вы сможете менять киберимпланты, навыки и стиль игры своего персонажа, исследуя огромный открытый мир, где ваши поступки влияют на ход сюжета и всё, что вас окружает.",
                company: 'CD PROJEKT RED Studio',
                publishing: 'CD PROJEKT RED Studio',
                year:2020,
                price: 1999,
                image: './src/1.jpg'
            }
        }
    }
});
let vm = app.mount("#app");
