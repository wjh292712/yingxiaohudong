<template>
    <div id="mains">
        <div id="bak_img">
            <p class="pps">
                已有<span id="num">100</span>人参与挑战
            </p>
            <div id="but_div" @click="dati">
                    <img src="../assets/dati.png">
            </div>
            <div id="ddvss">
                <span id="shuoming">游戏说明</span>
                <span id="split"></span>
                 <span id="jiangpin">我的奖品</span>
            </div>
        </div>

    </div>
</template>

<script>
import '../plugins/sudoku/jquery-1.11.0.js';
export default {
data(){
    return{

    }
},
methods:{
    dati(){
        this.$router.push({path:"/phone/dati"})
    }
}
}
</script>

<style scoped>
html,body{
    width: 100%;
    height: 100%;
}
#jiangpin{
      color:#613605;
      margin-left: 20px
}
#split{
    height: 20px;
    width: 3px;
    display: inline-block;
    background: #613605;
    position: relative;
   top: 5px;
   margin-left: 20px;
}
#shuoming{
    color:#613605;
    margin: auto auto;


}
#ddvss{
    position: absolute;
    bottom:3%;
    width: 200px;
    left: 50%;
    margin-left: -100px;
}
#but_div img{
    width: 100%;
    height: 100%;
}
#but_div{
    width: 150px;
    height: 50px;
    position: absolute;
    bottom: 9%;
    left: 50%;
    margin-left: -75px
}
#bak_img{
    width: 100%;
    height: 100%;
    background-size: 100%;
}
#bak_img{
    background-image: url(../assets/home.png);
    background-repeat: no-repeat;
    position: relative;
}
.pps{
    text-align: center;
    position: absolute;
    bottom: 18%;
    width: 200px;
    left: 50%;
    margin-left: -100px;
    color: #000
}
#mains{
    width: 100%;
    height: 100%;
}
#num{
color: #ff0000
}
</style>
