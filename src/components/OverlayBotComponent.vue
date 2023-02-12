<template>
  <div id="OverlayBot">
    <router-link to="/superheroes" class="link-to-list">
      <div></div>
      <div></div>
      <div></div>
    </router-link>
    <router-link to="/" class="link-back">
      <img :src="require(`../assets/img/icons/${isUserHero ? 'hero':'citoyen'}/fox.png`)" />
      <div class="icon-circle">
        <div class="icon-arrow">
          <div></div>
          <div></div>
        </div>
        <div class="icon-arrow">
          <div></div>
          <div></div>
        </div>
      </div>
    </router-link>
    <router-link to="/map" class="link-to-create">
      <div></div>
      <div></div>
    </router-link>
  </div>
</template>

<script>
export default {};
</script>

<style>
#OverlayBot {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
}

.link-to-list,
.link-to-create {
  width: 75px;
  height: 75px;
  border-radius: 50%;
  background-color: #ffafaf;
  box-shadow: 0px 10px 10px #08080836;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.link-back {
  width: 100px;
  height: 100px;
  background-color: #ffafaf;
  box-shadow: 0px 10px 10px #08080836;
  border-radius: 50%;
  display: flex;
  position: relative;
}
.link-back img {
  width: 90%;
  margin: auto;
}

.link-to-list div{
  width: 50%;
  height: 5px;
  border-radius: 10px;
  background-color: var(--secondary-color);
  margin: 4px;
}

.link-to-create div{
  width: 50%;
  height: 5px;
  border-radius: 10px;
  background-color: var(--secondary-color);
  position: absolute;
}

.link-to-create div:nth-child(1){
  transform: rotateZ(90deg);
}

.icon-circle{
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  bottom: 10px;
  right: 15px;
  border: 4px solid var(--secondary-color);
  display: flex;
  align-items: center;
  justify-content: center;
}
.icon-arrow{
  width: 1px;
  height: 1px;
  position: absolute;
}

.icon-arrow div{
  width: 4px;
  height: 10px;
  background-color: var(--secondary-color);
  border-radius: 5px;
  position: absolute;
}
.icon-arrow div:nth-child(1){
  transform:  translateX(-2px) rotateZ(45deg);
}
.icon-arrow div:nth-child(2){
  transform: translateX(2px) rotateZ(-45deg);  
}
.icon-arrow:nth-child(1){
  transform: translate(9px, -4px);  
}
.icon-arrow:nth-child(2){
  transform: translate(-11px, 6px) rotateZ(180deg);  
}
</style>
