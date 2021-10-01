<template>
  <div class="view">
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
        </div>
      </div>
    </div>
    <!-- Bottom section -->
    <div class="bottom row">
      <!-- Input section -->
      <div class="input row">
        <div class="input col">
          <div class="input-box">
            <span id="area-code-container">
              <select id="area-code">
                <option v-for="(code, short) in areaCodes" v-bind:key="code">
                  +{{ code }} ({{ countryCodes[short] }})</option
                >
              </select>
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
//test heroku
import areaCodes from "../components/areaCodes.json";
import countryCodes from "../components/countryCodes.json";
let step = 1;
let phoneNumber = "";
let name = "";
export default {
  name: "Login",
  data: function() {
    return { areaCodes, countryCodes };
  },
  methods: {
    addChat: function() {
      if (step === 1) {
        phoneNumber = document.querySelector("#input-content").value;
        if (phoneNumber.length >= 10) {
          this.printUserChat();
          this.printBotChat("Enter the received OTP on +1" + phoneNumber);
          document.querySelector("#area-code-container").remove();
          document
            .querySelector("#input-content")
            .setAttribute("placeholder", "Enter your OTP");
          step++;
        } else {
          this.printBotChat("Please enter your phone number again!");
        }
      } else if (step === 2) {
        let chatContent = document.querySelector("#input-content").value;
        if (chatContent.length > 0) {
          this.printUserChat();
          this.printBotChat("Enter your name:");
          document
            .querySelector("#input-content")
            .setAttribute("placeholder", "Enter your name");
          step++;
        } else {
          this.printBotChat("You entered nothing!");
        }
      } else if (step === 3) {
        name = document.querySelector("#input-content").value;
        if (name.length > 0) {
          this.printUserChat();
          this.printBotChat("Hi, " + name + "! Press Enter to proceed");
          document
            .querySelector("#input-content")
            .setAttribute("placeholder", "Press enter to proceed");
          step++;
        } else {
          this.printBotChat("You entered nothing!");
        }
      } else {
        step = 1;
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
.wrapper {
  position: relative;
}

.view {
  position: absolute;
  width: 100%;
  height: 100vh;
  min-height: 640px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  color: white;
  margin: 0;
  background-color: black;
  align-items: center;
  /* border: 1px white solid; */
}
.logo.row {
  position: fixed;
  margin-top: 50px;
  width: 100%;
  text-align: center;
  /* border: 1px white solid; */
}
.middle.row {
  position: fixed;
  display: flex;
  flex-direction: column-reverse;
  width: 100%;
  max-height: 50%;
  overflow: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  bottom: 80px;
}
.middle.row::-webkit-scrollbar {
  display: none;
}
.bottom.row {
  width: 100%;
  height: fit-content;
  position: fixed;
  bottom: 30px;
  /* border: 1px white solid; */
}
.text.col {
  width: 500px;
  margin-left: calc(50% - 130px);
}
.input.col {
  display: flex;
  flex-direction: row;
  width: 500px;
  height: fit-content;
  margin-left: calc(50% - 130px);
}
#area-code {
  color: white;
  width: 50px;
  border: none;
  background-color: black;
  opacity: 0.5;
}
.input-box {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  border: 1px solid white;
  border-radius: 14px;
  width: 265px;
  padding-left: 10px;
  height: fit-content;
}
form {
  width: 100%;
}
#input-content {
  background-color: black;
  color: white;
  border: none;
  margin-left: 5px;
  width: calc(100% - 15px);
  height: 40px;
}
.enter-btn {
  margin-left: 10px;
  border: none;
  background-color: black;
  width: 40px;
  height: 40px;
}
.logo {
  width: 15rem;
  height: auto;
}
</style>