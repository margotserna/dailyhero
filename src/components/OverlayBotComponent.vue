<template>
  <div id="OverlayBot">
    <router-link to="/superheroes" class="link-to-list">
      <div></div>
      <div></div>
      <div></div>
    </router-link>
    <router-link to="/" class="link-back">
      <img :src="require(`../assets/img/icons/${isUserHero ? 'hero':'citoyen'}/fox.png`)" />
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
</style>
