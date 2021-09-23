<template>
    <div class="container">
        <div class="check"/>
        <br>
        <div class="tex">
            Your order is placed successfully
        </div>
    </div>
</template>

<style>
*{
  box-sizing: border-box;
}
.container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 350px !important;
    height: 300px;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 2px 3px 6px 2px #00000029;
    border-radius: 41px;
    opacity: 1;
    position: fixed;
    left: calc(50% - 175px);
    bottom: 200px;
}

.check{
    top: 228px;
    left: 140px;
    width: 79px;
    height: 79px;
    background: transparent url('../images/icon-check-alt2.svg') 0% 0% no-repeat padding-box;
    opacity: 1;
}

.tex{
    top: 322px;
    left: 45px;
    width: 270px;
    height: 103px;
    text-align: center;
    font: normal normal bold 18px/24px Roboto;
    letter-spacing: 0.32px;
    color: #0A1F44;
    opacity: 1;
}

@media (max-width:768px){
    .container{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 350px !important;
        height: 300px;
        background: #FFFFFF 0% 0% no-repeat padding-box;
        box-shadow: 0px 3px 6px #00000029;
        border-radius: 41px;
        opacity: 1;
        position: fixed;
        left: calc(50% - 175px);
        bottom: 400px;
}
}

@media (max-width: 1024px){
    .container{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 350px !important;
        height: 300px;
        background: #FFFFFF 0% 0% no-repeat padding-box;
        box-shadow: 2px 3px 6px 2px #00000029;
        border-radius: 41px;
        opacity: 1;
        position: fixed;
        left: calc(50% - 175px);
        bottom: 550px;
}

}

</style>