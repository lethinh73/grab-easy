<template>
  <div class="bigcontainer">
    <div class="container">
      <div class="check" />
      <br />
      <div class="tex">
        Payment Failed
      </div>
      <a class="retry" href="/orderSuccess">Retry</a>
    </div>
  </div>
</template>

<style scoped>
* {
  box-sizing: border-box;
}
.bigcontainer {
  position: fixed;
  width: 100%;
  max-width: 420px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90% !important;
  height: 300px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 2px 3px 6px 2px #00000029;
  border-radius: 41px;
  opacity: 1;
  position: relative;
  margin: auto;
}

.check {
  top: 228px;
  left: 140px;
  width: 79px;
  height: 79px;
  background: transparent url("../images/icon-x.svg") 0% 0% no-repeat
    padding-box;
  opacity: 1;
}

.tex {
  top: 322px;
  left: 45px;
  width: 270px;
  height: 103px;
  text-align: center;
  font: normal normal bold 18px/24px Roboto;
  letter-spacing: 0.32px;
  color: #0a1f44;
  opacity: 1;
}
.retry {
  margin-bottom: 0;
}
</style>
