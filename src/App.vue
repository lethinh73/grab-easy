<template>
  <div class="view container-fluid">
    <!-- Logo section -->
    <div class="logo row">
      <div class="col">
        <img src="./images/grabeasy.png" alt="logo" />
      </div>
    </div>
    <!-- End logo section -->

    <div class="middle row">
      <div class="text row">
        <div id="chat-screen" class="text col">
          <p>Hey there, Let's get started.<br />Enter your mobile number</p>
        </div>
      </div>
    </div>

    <!-- Bottom section -->
    <div class="bottom row">
      <!-- Input section -->
      <div class="input row">
        <div class="input col">
          <div class="input-box">
            <span id="area-code">
              +1
            </span>
            <input id="input-content" type="tel" />
          </div>
          <button
            class="enter-btn"
            v-on:click="addChat()"
            v-on:keydown.enter="addChat()"
          ></button>
        </div>
      </div>
      <!-- End input section -->
    </div>
    <!-- End bottom section -->
  </div>
</template>

<script>
let step = 1;
let phoneNumber = 0;

export default {
  name: "App",

  methods: {
    addChat: function() {
      console.log(step);
      if (step === 1) {
        phoneNumber = document.querySelector("#input-content").value;
        this.printUserChat();
        this.printBotChat("Enter the received OTP on +1" + phoneNumber);
        step++;
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

<style scoped>
@import "./styles/App.css";
</style>
