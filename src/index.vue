<template>
  <div id='app'>
    <div id="nav-header">
        <Navbar></Navbar>
    </div>
    <Hello></Hello>
    
    <Classify></Classify>

    <Shuffle></Shuffle>

    <div id="film-detail">
        <MenuTab></MenuTab>
    </div>
  </div>
</template>

<script>
import Hello from './components/Hello'
import Navbar from './components/Navbar';
import Classify from './components/Classify';
import Shuffle from './components/Shuffle';
import MenuTab from './components/MenuTab';
export default {
  name: 'index',
   components: {
    Navbar:Navbar,
    Classify:Classify,
    Shuffle:Shuffle,
    MenuTab:MenuTab,
    Hello:Hello
  }
}
</script>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fdcb01;
  background:black;
   width:100%;
   float:left;
   overflow:hidden;
}
#nav-header{
  width:100%;
}

</style>
