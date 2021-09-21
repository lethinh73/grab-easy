<template>
  <div class="view container-fluid">
    <!-- Logo section -->
    <div class="logo row">
      <div class="col">
        <img class="logo" src="../images/grabeasy.png" alt="logo" />
      </div>
    </div>
    <!-- End logo section -->

    <div class="middle row">
      <div class="text row">
        <div id="chat-screen" class="text col">
          <p>Hey there, Let's get started.<br />Enter your mobile number</p>
          <div v-for="(code, country) in theData" v-bind:key="country">
            {{ country }} : {{ code }}
          </div>
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
            <form v-on:submit.prevent="addChat()">
              <input
                id="input-content"
                type="text"
                placeholder="Enter your phone number"
              />
            </form>
          </div>
          <button class="enter-btn" v-on:click="addChat()">
            <img src="../images/doubleleft.svg" />
          </button>
        </div>
      </div>
      <!-- End input section -->
    </div>
    <!-- End bottom section -->
  </div>
</template>

<script>
import areaCodes from "../components/areaCodes.json";
let step = 1;
let phoneNumber = "";
let name = "";

export default {
  name: "Login",
  data: function() {
    return { theData: areaCodes };
  },
  methods: {
    addChat: function() {
      if (step === 1) {
        phoneNumber = document.querySelector("#input-content").value;
        if (phoneNumber.length >= 10) {
          this.printUserChat();
          this.printBotChat("Enter the received OTP on +1" + phoneNumber);
          step++;
        } else {
          this.printBotChat("Please enter your phone number again!");
        }
      } else if (step === 2) {
        let chatContent = document.querySelector("#input-content").value;
        if (chatContent.length > 0) {
          this.printUserChat();
          this.printBotChat("Enter your name:");
          step++;
        } else {
          this.printBotChat("You entered nothing!");
        }
      } else if (step === 3) {
        name = document.querySelector("#input-content").value;
        if (name.length > 0) {
          this.printUserChat();
          this.printBotChat("How are you, " + name + "?");
          step++;
        } else {
          this.printBotChat("You entered nothing!");
        }
      } else {
        this.printUserChat();
        this.printBotChat("Sorry, we are still working on this!");
        this.$router.push("/venue");
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
    updatePlaceHolder: function(content) {
      document.querySelector("#input-content").value(content);
    },
  },
};
</script>

<style scoped>
@import url("../styles/Login.css");
</style>
