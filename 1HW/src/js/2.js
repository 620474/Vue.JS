let card = Vue.createApp({
    data: function () {
        return {
            man: 'Хидэо Кодзима',
            info: {
                birthday: "24 августа 1963",
                country: 'Япония',
                description:
                    "Японский геймдизайнер, сценарист, продюсер и руководитель разработки компьютерных игр.",
                company: 'Kojima Productions',
                games: 'Metal Gear Solid series, Death Stranding',
                email: 'example@kojimaproductions.jp',
                image: 'src/hideo.jpg',
            }
        }
    }
});
let vm = card.mount("#card");
