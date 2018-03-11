<template>
<b-container id="shuffle" class="shuffle-container">
  <b-row>
    <b-col  sm="12" md="4" class="swiper-movie">
      <!-- swiper -->
      <swiper :options="swiperOption">
      
        <swiper-slide v-for="(item,key) in swiper_movie" :key="key":style="{'background-image':'url(' + item.img_src + ')'}" ><a :href="item.href" class="s1"> <br><br><br><br><br><br><br><br><br><br>点击观看</a></swiper-slide>

        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
                 <ul>
                     <li v-for="item in swiper_movie_text"><a :href="item.href">{{item.text}} </a></li>
                 </ul>
    </b-col>
    <b-col  sm="12" md="7" id="shuffle-box">
        <div class="shuffle-title">热播速递</div>
        <div id="shuffle-movie">

            <div class="image img-2" v-for="item in shuffle_movie">
                <div class="mask"><span class="promt" @click="click(item.id)">{{item.name}}</span></div>
                <img class="movie1" width="300px" :src="item.img_src">
            </div>
         </div>
     </b-col>
    </b-row>
</b-container>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
const ERR_OK = 0;
require('swiper/dist/css/swiper.css')
  export default {
     components: {
              swiper,
              swiperSlide
          },
      created(){
        this.$http.get('/api/shuffle_movie').then((response)=> {
        response = response.body;
        if(response.errno === ERR_OK ){
          this.shuffle_movie = response.data;
        }
       }),
      this.$http.get('/api/swiper_movie').then((response)=> {
        response = response.body;
        if(response.errno === ERR_OK ){
          this.swiper_movie = response.data;
        }
      }),
      this.$http.get('/api/swiper_movie_text').then((response)=> {
        response = response.body;
        if(response.errno === ERR_OK ){
          this.swiper_movie_text = response.data;
          console.log(this.swiper_movie_text.length);
        }
      })
      },
    data() {
      return {
        swiper_movie_text:[],
        swiper_movie:[],
        shuffle_movie:[],
        swiperOption: {
          spaceBetween: 30,
          centeredSlides: true,
          autoplay: {
            delay: 2500,
            disableOnInteraction: false
          },
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        }
      }
    },methods:{
      click(id){
         this.$router.push("/item/"+id);
      }
    }
  }
</script>
<style lang="css">
   .shuffle-container{
    height:auto;
  }
  .s1{
    margin-left:0;
    bottom:0;
    color:yellow;
    background:black;
  }
  .swiper-slide {
    background: center ;
    background-size: cover;
    width: 300px;
    height: 300px;
  }
  .swiper-movie{
  width:35%;
  margin-left:35px;
  float:left;
  margin-right:4%;
  }

  .pic1{
  background-image:url(../assets/pic1.jpg);
  }
 .pic2{
  background-image:url(../assets/pic2.jpg);
  }
 .pic3{
  background-image:url(../assets/pic3.jpg);
  }
 .pic4{
  background-image:url(../assets/pic4.jpg);
  }
 .pic5{
  background-image:url(../assets/pic5.jpg);
  }
 .pic6{
  background-image:url(../assets/pic6.jpg);
  }
 .pic7{
  background-image:url(../assets/pic7.jpg);
  }
  #shuffle ul{
    list-style:none;
    text-decoration:none;
    float:left;
    margin:10px 0px 0px 0px;
  }
  .swiper-movie li{
    float:left;
  }
  .swiper-movie li a {
  display:block;
  color:#fff;
  text-decoration:none;
  padding:2px 0 0 5px;
  }
.swiper-movie li a:hover{
  color:yellow;
}


.movie1{
    background: center ;
    background-size: cover;
    width: 120px;
    height: 180px;
    margin: 20px 20px 10px 25px;
    float:left;
  background-image:url(https://img3.doubanio.com/view/movie_poster_cover/spst/public/p692813374.jpg);
}

.promt{
    color:yellow;
    font-size: 18px;
    background: black;
    cursor: pointer;
}
#shuffle .image{
    -webkit-transform: scale(0.8);
    -moz-transform: scale(0.8);
    -ms-transform: scale(0.8);
    -o-transform: scale(0.8);
    transform: scale(0.8);
    -webkit-transition: all 0.5s;
    -moz-transition: all 0.5s ;
    -ms-transition: all 0.5s ;
    -o-transition: all 0.5s ;
    transition: all 0.5s ;
    float: left;
    margin-top:0px;
    margin-left:20px;
    margin-right:20px;
}

#shuffle .image:hover{
    -webkit-transform: scale(0.9);
    -moz-transform: scale(0.9);
    -ms-transform: scale(0.9);
    -o-transform: scale(0.9);
    transform: scale(0.9);
    -webkit-box-shadow: 0px 0px 30px #ccc;
    -moz-box-shadow:  0px 0px 30px #ccc    ;
    box-shadow:  0px 0px 30px #ccc    ;
}
#shuffle .mask{
    background-color: rgba(0,0,0,0.6);
    width:100%;
    height: 100%;
    position: absolute;
    -webkit-transition: all 0.5s;
    -moz-transition: all 0.5s ;
    -ms-transition: all 0.5s ;
    -o-transition: all 0.5s ;
    transition: all 0.5s ;

}
#shuffle .img-2:hover .mask{
    height: 0;
    margin-top: 95px;
}
#shuffle .mask-02{
    right:0;
    width:50%;
}
#shuffle-box{

  float:left;
}
#shuffle-movie{

  float:left;
  border-top:1px solid yellow;
  background:rgba(85, 85, 85, 0.63);
}
.shuffle-title{
  width:70px;
  color:yellow;
  text-align:left;
  float:left;
  border-bottom:5px solid yellow;
}
#shuffle{
  border-top:50px solid rgba(85, 85, 85, 0.63);
  padding-top:20px;
  margin-top:20px;
  margin-bottom:-50px;
  margin-left:120px;
  display:block;
  width:80%;
  float:left;
    text-align:left;

}

</style>
