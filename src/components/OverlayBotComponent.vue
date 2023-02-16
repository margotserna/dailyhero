<template>
  <div id="OverlayBot"
  :class="this.$store.state.user.type">
    <router-link to="/profile" class="link-to-profile">
      <div></div>
      <div></div>
    </router-link>
    <router-link :to="this.$store.state.user.type == 'citizen' ? '/superheroes' : '/missions'" class="link-to-list">
      <div></div>
      <div></div>
      <div></div>
    </router-link>
    <router-link to="/" class="link-back">
      <img :src="require(`../assets/img/icons/${this.$store.state.user.type == 'hero' ? 'hero':'citoyen'}/fox.png`)" />
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
    <router-link to="/new-mission" class="link-to-create" v-if="this.$store.state.user.type == 'citizen'">
      <div></div>
      <div></div>
    </router-link>
    <router-link to="/motivation" class="link-to-motivation" v-else>
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
.link-to-create, 
.link-to-profile, 
.link-to-motivation {
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

.link-to-motivation div:nth-child(1){
  width: 40%;
  height: 5px;
  border-radius: 10px;
  background-color: var(--secondary-color);
  position: absolute;
  top: 30px;
  transform: rotateZ(90deg);
}

.link-to-motivation div:nth-child(2){
  width: 7px;
  height: 7px;
  border-radius: 5px;
  background-color: var(--secondary-color);
  position: absolute;
  bottom: 15px;
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

.link-to-profile {
  position: fixed;
  top : 20px;
  right: 20px;
  width: 80px;
  height: 80px;
  background-color: #ffafaf;
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

.citizen .link-to-list,
.citizen .link-to-create,
.citizen .link-back,
.citizen .link-to-profile {
  background-color:#DFFAFF !important;
}

.link-to-profile :nth-child(1){
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  top: 10px;
  border: 4px solid var(--secondary-color);
  display: flex;
  align-items: center;
  justify-content: center;
}
.link-to-profile :nth-child(2){
  position: absolute;
  width: 30px;
  height: 20px;
  border-radius: 30px 30px 0 0;
  top: 40px;
  border: 4px solid var(--secondary-color);
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
