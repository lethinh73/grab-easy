<template>
  <div class="view container-fluid">
    <!-- Logo section -->
    <div class="logo row">
      <div class="col">
        <img src="../images/grabeasy.png" alt="logo" />
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
          >
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
let step = 1;
let phoneNumber = "";
export default {
  name: "Login",
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

<style scoped>
.view {
  box-sizing: border-box;
  position: fixed;
  height: 100%;
  width: 100%;
  min-width: 320px;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  font-family: "Roboto", sans-serif;
  color: white;
  margin: 0;
  background-color: black;
  position: fixed;
  height: 100%;
  width: 100%;
}

.logo.row {
  top: 15%;
  width: 100%;
  text-align: center;
}

.middle.row {
  display: flex;
  flex-direction: column-reverse;
  margin: auto;
  width: 100%;
  height: 100%;
  min-height: 200px;
  overflow: scroll;
}

.bottom.row {
  width: 100%;
  height: fit-content;
  margin-bottom: 35px;
}

.text.col {
  width: 500px;
  margin-left: calc(50% - 125px);
}

.input.col {
  display: flex;
  flex-direction: row;
  width: 500px;
  margin-left: calc(50% - 125px);
}

.area-code {
  color: white;
  width: 70px;
  border: none;
  background-color: black;
  opacity: 0.3;
}

.input-box {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  border: 1px solid white;
  border-radius: 14px;
  width: 200px;
  padding-left: 10px;
  height: fit-content;
}

input {
  border: none;
  background-color: black;
  color: white;
  width: 100px;
  margin-left: 10px;
  width: 150px;
}

.enter-btn {
  margin-left: 10px;
  border: none;
  background-color: black;
  width: 25px;
  height: 25px;
}
</style>
