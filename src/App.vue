<template>
  <router-view />
</template>

<script>
let step = 1;
let phoneNumber = "";

export default {
  name: "App",

  methods: {
    addChat: function() {
      if (step === 1) {
        phoneNumber = document.querySelector("#input-content").value;
        console.log(phoneNumber.length);
        if (phoneNumber.length >= 10) {
          this.printUserChat();
          this.printBotChat("Enter the received OTP on +1" + phoneNumber);
          step++;
        } else {
          this.printBotChat("Please enter your phone number again!");
        }
      } else if (step === 2) {
        this.printUserChat();
        this.printBotChat("We are working on this!!!");
        step++;
      } else if (step === 3) {
        this.printUserChat();
        this.printBotChat("We are working on this!!!");
      }
    },
    printUserChat: function() {
      let userChat = document.querySelector("#input-content").value;
      document.querySelector("#chat-screen").innerHTML +=
        "<p style='padding-left: 150px; color: yellow'>" + userChat + "</p>";
      document.querySelector("#input-content").value = "";
    },
    printBotChat: function(content) {
      document.querySelector("#chat-screen").innerHTML +=
        "<p>" + content + "</p>";
    },
  },
};
</script>
<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: "Roboto", sans-serif;
}
a.nav-link {
  color: black;
}
input:focus {
  outline: none;
}
</style>
