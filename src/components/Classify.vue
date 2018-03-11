<template>
<b-container id="Classify" class="Classify-container">
  <b-row>
    <b-col  sm="12" md="5" id="type">
    <div class="type-tittle">影视分类 </div>
      <!--  从1开始-->
      <ul  v-for="index in movie_type_ulno">
       <li  v-for="idx in 6" ><router-link v-if="(idx+6*(index-1))<=movie_type_no" :to="movie_type[idx-1+6*(index-1)].href">{{movie_type[idx-1+6*(index-1)].name}}</router-link></li>
      </ul>


    </b-col>
    <b-col  sm="12" md="6" id="recommendation">
               <div class="title">经典推荐</div>
                 <ul>
                    <li><a v-for="item in recommendation" :href="item.href">{{item.content}}</a></li>
                 </ul>
           </b-col>
    </b-row>
</b-container>
</template>

<script>
const ERR_OK = 0;
const UL_LIST_NUM = 6;
export default {
    created(){
      this.$http.get('/api/recommendation').then((response)=> {
        response = response.body;
        if(response.errno === ERR_OK ){
          this.recommendation = response.data;
        }
      }),
      this.$http.get('/api/movie_type').then((response)=> {
        response = response.body;
        if(response.errno === ERR_OK ){
          this.movie_type = response.data;
          this.movie_type_no = response.data.length;
          this.movie_type_ulno = Math.ceil(this.movie_type_no/UL_LIST_NUM) ;
          console.log('this.movie_type_ulno-->'+this.movie_type_ulno);
        }
      })
  },
  data(){
      return {
        recommendation:[],
        movie_type:[],
        movie_type_ulno : '',
        movie_type_no:''
      }
  }
}
</script>
<style>
    @media only screen and (max-width: 1024px) {

    }
    @media only screen and (max-width: 960px) {
      #type{
        margin:auto;
        width:800px;
        padding-left:30px;

      }
      #type li a {

        width:180px;
        height:50px;
      }
      #Classify{
        width:100%;
        padding:20px 0px 20px 0px;
        margin:auto;
      }
    }
    @media only screen and (max-width: 520px) {
      #type{
        margin:auto;
        width:100%;
        font-size:12px;
        padding-left:0px;

      }
      #type li a {

        width:40px;
        height:30px;

      }
      #Classify{
        width:100%;
        padding:20px 0px 20px 0px;
        margin:0px 0px 20px 0px;
      }
    }

#type{
  display:block;

  margin-top:0px;
  margin-left:50px;
  float:left;
  border:10px solid rgba(85, 85, 85, 0.63);
  padding-left:30px;
}
#type ul{
  list-style:none;
  text-decoration:none;
  float:left;
  margin:10px 0px 0px 0px;
}
#type li{
  float:left;
}

#type li a {
  display:block;
  padding:8px 15px;
  background:rgba(85, 85, 85, 0.63);
  color:#fff;
  text-decoration:none;
  border-right:1px solid #000;
  width:120px;
  height:30px;
  line-height:30px;
  text-align:center;
}
#type li a:hover {
background:#fdcb01;
color:#fff;
}
#type li a.last {
border-right:none;
}
.type-tittle{
  margin-top:10px;
  height:20px;
  color:yellow;
  font-weight:700;
  left:0;
}
#Classify{
  width:80%;
  padding:20px 0px 20px 0px;
  margin:0px 0px 20px 100px;
}
 .Classify-container{
  height:auto;
}

#recommendation{
  margin-top:-10px;
  padding-bottom:5px;
  display:block;

  margin-left:20px;
  margin-top:0px;
  float:left;

}
#recommendation .title{
  width:70px;
  margin-left:20px;
  color:yellow;
  text-align:left;
  border-bottom:5px solid yellow;

}
#recommendation ul{
  list-style:none;
  text-decoration:none;
  float:left;
  text-align:left;
  margin:-15px 10px 0px 20px;
  border-top:1px solid yellow;
  border-bottom:1px solid yellow;
}
#recommendation li{
  display:block;
  margin-top:15px;
  float:left;
}
#recommendation li a {
display:block;
color:#fff;
text-decoration:none;
padding:2px 0 0 5px;
}
#recommendation li a:hover{
  color:yellow;
}
</style>
