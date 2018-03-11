<template>
  <!-- navbar partition -->
      <b-navbar toggleable="md" type="dark" variant="dark" >

        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

        <b-navbar-brand   to="/index">斯沃影院</b-navbar-brand>

        <b-collapse is-nav id="nav_collapse">

          <b-navbar-nav>
                  <b-nav-item-dropdown text="上映时间">
                    <b-dropdown-item href="#">2000</b-dropdown-item>
                    <b-dropdown-item href="#">1990</b-dropdown-item>
                    <b-dropdown-item href="#">1980</b-dropdown-item>
                    <b-dropdown-item href="#">更多</b-dropdown-item>
                  </b-nav-item-dropdown>
            <b-nav-item href="#classify" >分类</b-nav-item>
            <b-nav-item href="#" >排行</b-nav-item>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">

          <b-nav-form>
            <b-form-input class="mr-sm-2" type="text" placeholder="电影/电视剧" v-model="message"></b-form-input>
            <b-button variant="outline-warning" class="my-2 my-sm-0" type="submit" @click="serch">搜索</b-button>
          </b-nav-form>
          </b-navbar-nav>

        </b-collapse>
      </b-navbar>
</template>

<script>
export default {
data(){
  return {
    message:""
  }
},
methods:{
  serch(){
    if(this.message!=""){
      this.$router.push("/item/"+this.message);
      this.message = "";
    }else{
      alert('搜索内容不为空');
    }
  }
}
}
</script>
<style>

</style>
