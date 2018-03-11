<template>

<div id="MenuTab">
    <b-tabs  v-model="tabIndex">

      <b-tab title="动作影院" :title-link-class="linkClass(0)" class="mTab1" @click="getact">
        <div id="collection">
        <div class="collection_part">
            <div class="title">最近更新</div>
                   <div class="films">
                        <img id="img2" :src="MenuTabMovs.recent_updates[0].img_src" alt=""/>
                             <div class="line2show">
                                  <span class="imgArea2">
                                    <a href="#">点击观看</a>
                                  </span>
                              </div>
                         <div class="description-1">
                         {{MenuTabMovs.recent_updates[0].e_text}}
                         </div>
                         <div class="description-2">
                          {{MenuTabMovs.recent_updates[0].c_text}}
                         </div>
                   </div>
                  <div class="films">
                        <img id="img2" :src="MenuTabMovs.recent_updates[1].img_src" alt=""/>
                             <div class="line2show">
                                  <span class="imgArea2">
                                    <a href="#">点击观看</a>
                                  </span>
                              </div>
                         <div class="description-1">
                         {{MenuTabMovs.recent_updates[1].e_text}}
                         </div>
                         <div class="description-2">
                          {{MenuTabMovs.recent_updates[1].c_text}}
                         </div>
                   </div>
                   <div class="films">
                        <img id="img2" :src="MenuTabMovs.recent_updates[2].img_src" alt=""/>
                             <div class="line2show">
                                  <span class="imgArea2">
                                    <a href="#">点击观看</a>
                                  </span>
                              </div>
                         <div class="description-1">
                         {{MenuTabMovs.recent_updates[2].e_text}}
                         </div>
                         <div class="description-2">
                          {{MenuTabMovs.recent_updates[2].c_text}}
                         </div>
                   </div>
        </div>
        <div class="collection_part">
            <div class="title">往期精选</div>

                   <div class="films">
                        <img id="img2" :src="MenuTabMovs.previous_selection[0].img_src" alt=""/>
                             <div class="line2show">
                                  <span class="imgArea2">
                                    <a href="#">点击观看</a>
                                  </span>
                              </div>
                         <div class="description-1">
                         {{MenuTabMovs.previous_selection[0].e_text}}
                         </div>
                         <div class="description-2">
                          {{MenuTabMovs.previous_selection[0].c_text}}
                         </div>

                   </div>
                    <div class="films">
                        <img id="img2" :src="MenuTabMovs.previous_selection[1].img_src" alt=""/>
                             <div class="line2show">
                                  <span class="imgArea2">
                                    <a href="#">点击观看</a>
                                  </span>
                              </div>
                         <div class="description-1">
                         {{MenuTabMovs.previous_selection[1].e_text}}
                         </div>
                         <div class="description-2">
                          {{MenuTabMovs.previous_selection[1].c_text}}
                         </div>

                   </div>
                    <div class="films">
                        <img id="img2" :src="MenuTabMovs.previous_selection[2].img_src" alt=""/>
                             <div class="line2show">
                                  <span class="imgArea2">
                                    <a href="#">点击观看</a>
                                  </span>
                              </div>
                         <div class="description-1">
                         {{MenuTabMovs.previous_selection[2].e_text}}
                         </div>
                         <div class="description-2">
                          {{MenuTabMovs.previous_selection[2].c_text}}
                         </div>

                   </div>
        </div>
        </div>
      </b-tab>
      <b-tab title="喜剧天地" :title-link-class="linkClass(1)" @click="getcomedy" >
       <div id="collection">
        <div class="collection_part">
            <div class="title">最近更新</div>
                   <div class="films">
                        <img id="img2" :src="MenuTabMovs.recent_updates[0].img_src" alt=""/>
                             <div class="line2show">
                                  <span class="imgArea2">
                                    <a href="#">点击观看</a>
                                  </span>
                              </div>
                         <div class="description-1">
                         {{MenuTabMovs.recent_updates[0].e_text}}
                         </div>
                         <div class="description-2">
                          {{MenuTabMovs.recent_updates[0].c_text}}
                         </div>
                   </div>
                  <div class="films">
                        <img id="img2" :src="MenuTabMovs.recent_updates[1].img_src" alt=""/>
                             <div class="line2show">
                                  <span class="imgArea2">
                                    <a href="#">点击观看</a>
                                  </span>
                              </div>
                         <div class="description-1">
                         {{MenuTabMovs.recent_updates[1].e_text}}
                         </div>
                         <div class="description-2">
                          {{MenuTabMovs.recent_updates[1].c_text}}
                         </div>
                   </div>
                   <div class="films">
                        <img id="img2" :src="MenuTabMovs.recent_updates[2].img_src" alt=""/>
                             <div class="line2show">
                                  <span class="imgArea2">
                                    <a href="#">点击观看</a>
                                  </span>
                              </div>
                         <div class="description-1">
                         {{MenuTabMovs.recent_updates[2].e_text}}
                         </div>
                         <div class="description-2">
                          {{MenuTabMovs.recent_updates[2].c_text}}
                         </div>
                   </div>
        </div>
        <div class="collection_part">
            <div class="title">往期精选</div>

                   <div class="films">
                        <img id="img2" :src="MenuTabMovs.previous_selection[0].img_src" alt=""/>
                             <div class="line2show">
                                  <span class="imgArea2">
                                    <a href="#">点击观看</a>
                                  </span>
                              </div>
                         <div class="description-1">
                         {{MenuTabMovs.previous_selection[0].e_text}}
                         </div>
                         <div class="description-2">
                          {{MenuTabMovs.previous_selection[0].c_text}}
                         </div>

                   </div>
                    <div class="films">
                        <img id="img2" :src="MenuTabMovs.previous_selection[1].img_src" alt=""/>
                             <div class="line2show">
                                  <span class="imgArea2">
                                    <a href="#">点击观看</a>
                                  </span>
                              </div>
                         <div class="description-1">
                         {{MenuTabMovs.previous_selection[1].e_text}}
                         </div>
                         <div class="description-2">
                          {{MenuTabMovs.previous_selection[1].c_text}}
                         </div>

                   </div>
                    <div class="films">
                        <img id="img2" :src="MenuTabMovs.previous_selection[2].img_src" alt=""/>
                             <div class="line2show">
                                  <span class="imgArea2">
                                    <a href="#">点击观看</a>
                                  </span>
                              </div>
                         <div class="description-1">
                         {{MenuTabMovs.previous_selection[2].e_text}}
                         </div>
                         <div class="description-2">
                          {{MenuTabMovs.previous_selection[2].c_text}}
                         </div>

                   </div>
        </div>
        </div>
      </b-tab>
      <b-tab title="恐怖专区" :title-link-class="linkClass(2)" @click="getterror">
       <div id="collection">
        <div class="collection_part">
            <div class="title">最近更新</div>
                   <div class="films">
                        <img id="img2" :src="MenuTabMovs.recent_updates[0].img_src" alt=""/>
                             <div class="line2show">
                                  <span class="imgArea2">
                                    <a href="#">点击观看</a>
                                  </span>
                              </div>
                         <div class="description-1">
                         {{MenuTabMovs.recent_updates[0].e_text}}
                         </div>
                         <div class="description-2">
                          {{MenuTabMovs.recent_updates[0].c_text}}
                         </div>
                   </div>
                  <div class="films">
                        <img id="img2" :src="MenuTabMovs.recent_updates[1].img_src" alt=""/>
                             <div class="line2show">
                                  <span class="imgArea2">
                                    <a href="#">点击观看</a>
                                  </span>
                              </div>
                         <div class="description-1">
                         {{MenuTabMovs.recent_updates[1].e_text}}
                         </div>
                         <div class="description-2">
                          {{MenuTabMovs.recent_updates[1].c_text}}
                         </div>
                   </div>
                   <div class="films">
                        <img id="img2" :src="MenuTabMovs.recent_updates[2].img_src" alt=""/>
                             <div class="line2show">
                                  <span class="imgArea2">
                                    <a href="#">点击观看</a>
                                  </span>
                              </div>
                         <div class="description-1">
                         {{MenuTabMovs.recent_updates[2].e_text}}
                         </div>
                         <div class="description-2">
                          {{MenuTabMovs.recent_updates[2].c_text}}
                         </div>
                   </div>
        </div>
        <div class="collection_part">
            <div class="title">往期精选</div>

                   <div class="films">
                        <img id="img2" :src="MenuTabMovs.previous_selection[0].img_src" alt=""/>
                             <div class="line2show">
                                  <span class="imgArea2">
                                    <a href="#">点击观看</a>
                                  </span>
                              </div>
                         <div class="description-1">
                         {{MenuTabMovs.previous_selection[0].e_text}}
                         </div>
                         <div class="description-2">
                          {{MenuTabMovs.previous_selection[0].c_text}}
                         </div>

                   </div>
                    <div class="films">
                        <img id="img2" :src="MenuTabMovs.previous_selection[1].img_src" alt=""/>
                             <div class="line2show">
                                  <span class="imgArea2">
                                    <a href="#">点击观看</a>
                                  </span>
                              </div>
                         <div class="description-1">
                         {{MenuTabMovs.previous_selection[1].e_text}}
                         </div>
                         <div class="description-2">
                          {{MenuTabMovs.previous_selection[1].c_text}}
                         </div>

                   </div>
                    <div class="films">
                        <img id="img2" :src="MenuTabMovs.previous_selection[2].img_src" alt=""/>
                             <div class="line2show">
                                  <span class="imgArea2">
                                    <a href="#">点击观看</a>
                                  </span>
                              </div>
                         <div class="description-1">
                         {{MenuTabMovs.previous_selection[2].e_text}}
                         </div>
                         <div class="description-2">
                          {{MenuTabMovs.previous_selection[2].c_text}}
                         </div>

                   </div>
        </div>
        </div>

      </b-tab>

    </b-tabs>
</div>

</template>

<script>
const ERR_OK = 0;
export default {
  created(){
    this.$http.get('/api/MenuTabMovs/act').then((response)=> {
        response = response.body;
        if(response.errno === ERR_OK ){
          this.MenuTabMovs = response.data;
        }
      })
  },
  data () {
    return {
      MenuTabMovs:{},
      tabIndex: 0
    }
  },
  methods: {
    linkClass (idx) {
      if (this.tabIndex === idx) {
        return ['bg-warning', 'text-light']
      } else {
        return ['dark', 'text-warning']
      }
    },
    getact(){
      this.$http.get('/api/MenuTabMovs/act').then((response)=> {
        response = response.body;
        if(response.errno === ERR_OK ){
          this.MenuTabMovs = response.data;
        }
      })
    },
    getterror(){
      this.$http.get('/api/MenuTabMovs/terror').then((response)=> {
        response = response.body;
        if(response.errno === ERR_OK ){
          this.MenuTabMovs = response.data;
        }
      })
    },
    getcomedy(){
      this.$http.get('/api/MenuTabMovs/comedy').then((response)=> {
        response = response.body;
        if(response.errno === ERR_OK ){
          this.MenuTabMovs = response.data;
        }
      })
    }
  }
}
</script>
<style>
   @media screen and (min-width:560px) and (max-width:960px) {

    }


    @media only screen and (max-width:1500px) {

    }
  .banner{
  margin-top:-65px;
    width:100%;
    background:black;
    height:64px;
  }
  #MenuTab{

    font-size:32px;
  }
  #MenuTab li{
    margin-left:150px;
    padding-left:20px;
  }

  #MenuTab ul{
    text-align: center;
    background:black;

    margin-top:20px;
    width:80%;
    line-height:auto;

  }

  .films{
      color:yellow;
       font-weight: bold;
       font-size: 36px;
       font-family:Georgia, "Times New Roman", Times, serif;
       font-style: italic;
       text-align:left;


  }
  #collection{
    width:80%;
    float:left;
    overflow:hidden;
    background:rgba(85, 85, 85, 0.63);
    padding:20px 0px 20px 0px;
    margin:0px 0px 20px 0px;
  }
  .films{
      float:left;
       text-align: center;
       line-height: 15px;
       font-weight: bold;
       color: #ffffff;
       margin:0 10px 20px 10px;
       font-size: 15px;
       font-family:Georgia, "Times New Roman", Times, serif;
       font-style: italic;
       position: relative;
       margin-left: 45px;
       overflow: hidden;
       display: inline-block;
       cursor: pointer;
      -webkit-transition:  all 1.5s;
      -moz-transition:  all 1.5s ;
      -ms-transition:  all 1.5s ;
      -o-transition:  all 1.5s ;
      transition:  all 1.5s ;
        }
  .films img{
      width: 350px;
      height: 300px;
      border-radius: 5px;
      -webkit-transition: all 2s;
      -moz-transition: all 2s ;
      -ms-transition: all 2s ;
      -o-transition: all 2s ;
      transition: all 2s ;

  }
  .films img #img2{


      position: relative;
      text-align: center;
      line-height: 18px;
      z-index: 1;
      -webkit-transition: all 5s;
      -moz-transition:  all 5s ;
      -ms-transition:  all 5s ;
      -o-transition:  all 5s ;
      transition:  all 5s ;
  }
  .films .line2show{
      background-color: rgba(0,0,0,0.5);
      position: absolute;
      width: 350px;
      height:300px;
      left:0;
      top:0;
      opacity: 0;
      z-index:200;

      -webkit-transition: all 5s;
      -moz-transition:  all 5s ;
      -ms-transition:  all 5s ;
      -o-transition:  all 5s ;
      transition:  all 5s ;
  }
  .films .imgArea2{
      position: absolute;

      left:50%;
      bottom: 80px;
      margin:0px 0px 0px -60px;
      opacity: 0;
      /*background-color: red;*/

      -webkit-transition: all 2s;
      -moz-transition: all 2s ;
      -ms-transition: all 2s ;
      -o-transition: all 2s ;
      transition: all 2s ;
  }
  .films .imgArea2 a{
      border-radius: 18px ;
      border:rgba(255,255,255, 0.6) 1px solid;
      padding: 5px 12px;
      color:yellow;
      display: block;
      text-decoration: none;
  }
  .imgArea2 a:hover{
      color: rgba(0,0,0,0.8);
      background-color: rgba(255,255,255, 0.8);
  }
  .films:hover .line2show{
      opacity: 1;
  }
  .films:hover #img2{

      -webkit-transform: scale(1.5);
      -moz-transform: scale(1.5);
      -ms-transform: scale(1.5);
      -o-transform: scale(1.5);
      transform: scale(1.5);
  }
  .line2show:hover .imgArea2{
      opacity: 1;
  }


  #film-detail{
    width:100%;
    float:left;
    overflow:hidden;
    padding:20px 0px 20px 0px;
    margin:0px 200px 20px 120px;
  }
  .title{
     width:100%;
    border-bottom:5px solid black;
    text-align:left;
    margin-bottom:15px;
    color:yellow;
  }
  .description-2{
    position:relative;
    background:black;
    text-align:left;
    border-left:15px solid yellow;

  }
   .description-1{
      position:relative;
      background:black;
      text-align:left;
      font-size:16px;
      height:30px;
    }
    .collection_part{
    position:relative;
      width:100%;
      overflow:hidden;
    }


</style>
