<template>
  <div id="category">

         <Navbar></Navbar>
         <div >
        <b-container fluid id="box">
          <b-row>
            <b-col sm="12" sm-offset="2">
              <div class="category-tittle">{{$route.params.id}} <span class="watch-label">观看全部</span></div>
              <b-row>
                <b-col cols="2" sm="2" v-for="(item,key) in movie_items " :key="key">
                   <div class="items">
                   <router-link :to="item.url">
                        <img :src="item.img_src" alt=""/>
                             <div class="desp-1">
                                   {{item.name}}
                             </div>
                   </router-link>
                   </div>
                </b-col>


              </b-row>
            </b-col>
          </b-row>
        </b-container>

        </div>
                <b-container fluid class="category-content">
                  <b-row  >

                      <b-col md="3" class="rank ">
                         <ul>
                              <li><span class="rank-tittle">评分排名</span></li>
                              <li><span class="rank-tittle">1 </span><span class="rank-movie"> 怪物猎人：世界</span></li>
                              <li><span class="rank-tittle">2 </span><span class="rank-movie"> 街头霸王五</span></li>
                              <li><span class="rank-tittle">3 </span><span class="rank-movie"> 早期人</span></li>
                              <li><span class="rank-tittle">4 </span><span class="rank-movie"> 城南旧事</span></li>
                         </ul>
                       </b-col>
                      <b-col md="3" class="rank  ">
                         <ul>
                              <li><span class="rank-tittle">国内流行排行</span></li>
                              <li><span class="rank-tittle">1 </span><span class="rank-movie"> 怪物猎人：世界</span></li>
                              <li><span class="rank-tittle">2 </span><span class="rank-movie"> 街头霸王五</span></li>
                              <li><span class="rank-tittle">3 </span><span class="rank-movie"> 早期人</span></li>
                              <li><span class="rank-tittle">4 </span><span class="rank-movie"> 城南旧事</span></li>
                         </ul>

                      </b-col>
                      <b-col md="3" class="rank  ">
                         <ul>
                              <li><span class="rank-tittle">欧美经典排名</span></li>
                              <li><span class="rank-tittle">1 </span><span class="rank-movie"> 怪物猎人：世界</span></li>
                              <li><span class="rank-tittle">2 </span><span class="rank-movie"> 街头霸王五</span></li>
                              <li><span class="rank-tittle">3 </span><span class="rank-movie"> 早期人</span></li>
                              <li><span class="rank-tittle">4 </span><span class="rank-movie"> 城南旧事</span></li>
                         </ul>

                      </b-col>

                  </b-row>
                </b-container>

  </div>
</template>

<script>
const ERR_OK = 0;
import Navbar from './Navbar';
export default {
  name: 'MovieCategory',
   components: {
    Navbar:Navbar,

  },
  data(){
    return{
      movie_items:[]
    }
  },
  created(){
  
    this.$http.get('/api/movie_items/'+(this.$route.params.id).split('（')[0]).then((response)=> {
        response = response.body;
        if(response.errno === ERR_OK ){
          this.movie_items = response.data;
        }
        console.log(movie_items.length)
      })
  }
}
</script>

<style>
.big{
  background:green;
}
  #category{
  width:100%;
  height:auto;
  background:black;
  margin:auto;

  }
  #box{
    background:url("http://www.metacritic.com/images/h5/bg/MovieHubReleases.png") repeat ;

    text-align:left;
  }
  .category-tittle{
    font-family:Georgia, "Times New Roman", Times, serif;
    font-weight:400;
    font-size:32px;
    color:white;
    margin-left:50px;
    margin-bottom:25px;
    margin-top:45px;
  }
  .category-content{
    background:white;
     margin-top:30px;
    padding-left:150px;

  }
  .rank-tittle{
    font-size: 1.6em;
    font-weight: 500;
    text-transform: uppercase;
     vertical-align: top;
  }
  .rank-movie{
      font-size: 1.4em;

     font-weight: bold;
    vertical-align: bottom;
    padding-bottom: 1.5rem;
    color:black;
  }
  .rank{
    margin-top:30px;
    margin-left:40px;
    color:#ccc;

  }
  .rank ul{
    list-style:none;
    text-align:left;
  }
    .items img{
      border-top:5px solid yellow;
      border-bottom:5px solid yellow;
    }
  .items{
      color:yellow;
       font-weight: bold;
       font-size: 36px;
       font-family:Georgia, "Times New Roman", Times, serif;
       font-style: italic;
       text-align:left;
       width:200px;
       height:300px;
        margin-left:130px;



  }
    .desp-2{
      position:relative;
      background:rgba(85, 85, 85, 0.63);
      text-align:left;
      font-size:16px;
      color:white;
    }
     .desp-1{
        position:relative;
        background:rgba(85, 85, 85, 0.29);
        text-align:left;
        font-size:16px;
        height:30px;
        border-bottom:1px solid #ccc;
        color:yellow;
      }
      .watch-label{
        color:#29d2c7;
      }
      .watch-label:hover{
        color:yellow;
      }
</style>
