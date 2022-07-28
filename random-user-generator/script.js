const app = Vue.createApp({
  data() {
    return {
      firstName: "John",
      lastName: "Doe",
      email: "john@gmail.com",
      gender: "male",
      picture: "https://randomuser.me/api/portraits/men/10.jpg",
    };
  },
  methods: {
    async getRandomUser() {
      await fetch("https://randomuser.me/api")
        .then((res) => res.json())
        .then((data) => {
          const { results } = data;
          this.firstName = results[0].name.first;
          this.lastName = results[0].name.last;
          this.email = results[0].email;
          this.gender = results[0].gender;
          this.picture = results[0].picture.large;
        })
        .catch((err) => console.log(err));
    },
  },
});

app.mount("#app");
