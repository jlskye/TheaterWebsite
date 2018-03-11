<template>
  <div id="category">
        <div>
         <Navbar></Navbar>
        <b-container fluid >
          <b-row>
            <b-col sm="10" sm-offset="2" class="test1">
                  <br><br>
              <b-row>
                <b-col cols="8" sm="8" class="test2">
                    <b-row>
                      <b-col cols="4" sm="4" class="test4">
                        <img :src="movie_detail.img_src"
                        style="width:200px;height:300px;" alt=""/>
                      </b-col>
                      <b-col cols="8" sm="8" class="test5">
                      <div class="review-tittle">电影细节和评分</div>
                      <table>
                          <tbody>
                              <tr>
                                  <td class="sub-tittle"><img  class="cert_rating_img" src="http://www.metacritic.com/images/mpaa/RATED_PG.svg"></td>
                                  <td class="sub-tittle"><span class="sub-tag1">斯沃影视 </span><span class="sub-tag2">发行日期：{{movie_detail.datatime}}</span></td>
                              </tr>
                          </tbody>
                      </table>
                      <div class="section">
                          <span class="label">主演: </span>
                          <span class="actor-name" v-for="actor in movie_detail.actor">{{actor}}</span>
                      </div>
                      <div class="section">
                          <span class="label">总结: </span>
                          <span>{{movie_detail.summary}}</span>
                      </div>
                      <div class="sub-section">
                          <span class="label">导演: </span>
                          <span class="actor-name">{{movie_detail.director}}</span>
                      </div>
                      <div class="sub-section">
                          <span class="label">主题: </span>
                          <span> {{movie_detail.theme}}</span>
                      </div>
                      <div class="sub-section">
                          <span class="label">评分: </span>
                          <span> PG</span>
                      </div>
                      <div class="sub-section">
                          <span class="label">运行时间: </span>
                          <span> {{movie_detail.time}}</span>
                      </div>
                      </b-col>
                      </b-row>
                     <b-row>
                       <b-col cols="6" sm="6" class="a">
                            <div class="review-tittle">评论家分数</div>
                            <table class="chart">
                            <tr>
                                <td class="score-1">{{movie_detail.critic_score.score}}</td>
                                <td class="progress-1">
                                      <span class="progress-tag">喜欢: &nbsp;</span><b-progress :value="movie_detail.critic_score.like" height="8px" variant="success" striped :animated="animate"class="w-50 mb-2 "></b-progress>
                                      <span class="progress-tag">讨厌: &nbsp;</span><b-progress :value="movie_detail.critic_score.hate"  height="8px"  variant="info" striped :animated="animate" class="w-50 mb-2"></b-progress>
                                      <span class="progress-tag">一般: &nbsp;</span><b-progress :value="movie_detail.critic_score.common"  height="8px" variant="warning" striped :animated="animate" class="w-50 mb-2"></b-progress>
                                  </td>
                            </tr>
                            </table>
                            <div class="critic-comments">评论家评论</div>
                            <div class="comments-items" v-for="item in movie_detail.critic_comment">
                                <table class="items-header">
                                <tr>
                                    <td class="score-1">{{item.score}}</td>
                                    <td class="comments-name">{{item.name}}</td>
                                    <td class="comments-time">{{item.time}}</td>
                                </tr>
                                </table>
                                <div >{{item.content}}</div>
                            </div>
                           

                       </b-col>
                       <b-col cols="6" sm="6" class="b">
                            <div class="review-tittle">用户分数</div>
                            <table class="chart">
                            <tr>
                                <td class="score-2">{{movie_detail.user_score.score}}</td>
                                <td class="progress-1">
                                      <span class="progress-tag">喜欢: &nbsp;</span><b-progress :value="movie_detail.user_score.like" height="8px" variant="success" striped :animated="animate"class="w-50 mb-2 "></b-progress>
                                      <span class="progress-tag">讨厌: &nbsp;</span><b-progress :value="movie_detail.user_score.hate"  height="8px"  variant="info" striped :animated="animate" class="w-50 mb-2"></b-progress>
                                      <span class="progress-tag">一般: &nbsp;</span><b-progress :value="movie_detail.user_score.common"  height="8px" variant="warning" striped :animated="animate" class="w-50 mb-2"></b-progress>
                                  </td>
                            </tr>
                            </table>
                            <div class="critic-comments">网友评论</div>
                            <div class="comments-items" v-for="item in movie_detail.user_comment">
                                <table class="items-header">
                                 <tr>
                                    <td class="score-1">{{item.score}}</td>
                                    <td class="comments-name">{{item.name}}</td>
                                    <td class="comments-time">{{item.time}}</td>
                                </tr>
                                </table>
                                <div >{{item.content}}</div>
                            </div>

                       </b-col>
                     </b-row>
                </b-col>

                <b-col cols="4" sm="4" class="test3">
                  <span class="detail-recommendation">类似电影推荐</span>
                  <Movie></Movie>

                </b-col>
              </b-row>
            </b-col>
          </b-row>
        </b-container>

        </div>
  </div>
</template>

<script>
const ERR_OK = 0;
import Navbar from './Navbar';
import Movie from './MovieRecommendation';
export default {
  name: 'MovieCategory',
  data () {
      return {
        animate: true,
        movie_detail:{}
      }
    },
  created(){
    this.$http.get('/api/movie_detail/'+this.$route.params.id).then((response)=> {
        response = response.body;
        if(response.errno === ERR_OK ){
          this.movie_detail = response.data;
        }
      })
  },
   components: {
    Navbar:Navbar,
    Movie:Movie,
  }
}
</script>

<style>

.a{
  background:white;
  text-align:left;
}
.b{
  background:white;
    text-align:left;

}
  .detail-recommendation{
    font-size:28px;
    font-weight:700;
    color:#ccc;
    text-align:right;
    margin-left:100px;
  }
  .score-1{
    width:50px;
    height:50px;
    font-size:32px;
    color:white;
    background:yellow;
    margin:25px 25px 25px 25px;
    text-align:center;
  }
  .score-2{
    width:50px;
    height:50px;
    font-size:32px;
    color:white;
    background:green;
    margin:25px 25px 25px 25px;
    text-align:center;

    border-radius:50%;
  }
  .comments-name{
    font-size:18px;
    font-weight:700;
    float:left;
    margin-left:10px;
    width:100%;
  }
  .comments-time{
    position:positive;
    margin-left:10px;


      text-align:left;
      font-size:14px;
      font-weight:200;
      float:left;
  }
  .items-header{
    margin-top:25px;
  }
  .progress-1{
    width:400px;
    padding-left:20px;
  }
  .progress-tag{
    position:relative;
    font-size:12px;
    font-weight:700;
    float:left;
    z-index:100;
    margin-top:-5px;
  }
  .critic-comments{
    margin-top:25px;
    font-size:28px;
    font-weight:400;
    border-bottom:2px solid #ccc;
    text-align:left;
  }
  .comments-items{
    border-bottom:2px solid #ccc;
    padding-bottom:20px;

  }
  #category{
    color:black;
  }
.test1{
  background:white;
  float:left;
  text-align:left;
  margin-left:120px;

}
.test2{
  background:yellow;
  float:left;
  text-align:left;

}
.test3{
  background:white;
  float:left;
  text-align:left;
  margin-top:420px;

}
.test4{
  background:white;
  float:left;
  text-align:left;

}
.test5{
  background:white;
  float:left;
  text-align:left;

}
  .test4 img{
    float:right;
  }
  .review-tittle{
    font-family:Helvetica, Arial, sans-serif;
    font-size:32px;
    font-wight:400;
    color:black;
    text-align:left;

  }
  .cert_rating_img{
        height: 1.2rem;
        margin-right: .4rem;
        vertical-align: middle;
  }
  .sub-tag1{
    color:black;
    margin-right:5px;

    border-right:2px solid;
  }
  .sub-tag2{
    color:black;

  }
  .section{
    margin-bottom:25px;
  }
  .sub-section{
    margin-bottom:5px;
  }
  .label{
    font-weight:bold;
    vertical-align: baseline;
  }
  .actor-name:hover{
    color:yellow;
  }
</style>
