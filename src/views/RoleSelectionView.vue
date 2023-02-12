<template>
  <div
    class="role"
    :class="[
      (isHero ? 'hero-selected' : '') + (isCitoyen ? 'citoyen-selected' : ''),
    ]"
  >
    <div class="column" @click="citoyen()">
      <div class="bg-1"></div>
      <img id="citoyen-img" src="../assets/img/citoyen.png" alt="Citoyen" />
      <h3>Citoyen</h3>
    </div>
    <div class="column" @click="hero()">
      <div class="bg-2"></div>
      <img id="hero-img" src="../assets/img/hero.png" alt="Hero" />
      <h3>Hero</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "RoleSelectionView",
  methods: {
    citoyen() {
      this.isCitoyen = true;
      this.switch();
    },
    hero() {
      this.isHero = true;
      this.switch();
    },
    switch() {
      let router = this.$router;
      if (this.isHero == true) {
        setTimeout(function () {
          router.push({ name: "MapViewHero" });
        }, 1100);
      }
      else if (this.isCitoyen == true) {
        setTimeout(function () {
          router.push({ name: "MapViewCitizen" });
        }, 1100);
      }
    },
  },
};
</script>

<style lang="css" scoped>
.role {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
.column {
  width: 50%;
  height: 100%;
  float: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
}

.column > img {
  width: 40vw;
}
/* .column:nth-child(1){
    background-color: #5bd0ff;
  }
  .column:nth-child(2){
    background-color: #ff5347;
  } */
.bg-1 {
  position: absolute;
  background-color: var(--citoyen-color);
  width: 200vw;
  height: 150vh;
  transform: rotateZ(10deg);
  left: -150vw;
  z-index: -1;
}
.bg-2 {
  position: absolute;
  background-color: var(--hero-color);
  width: 200vw;
  height: 150vh;
  transform: rotateZ(10deg);
  right: -150vw;
  z-index: -1;
}

/* CITOYEN SELECTED */
.citoyen-selected .column:nth-child(1) {
  width: 100vw;
  transition: 0.5s ease;
}
.citoyen-selected .column:nth-child(2) {
  width: 0vw;
  transition: 0.5s ease;
}
.citoyen-selected .bg-1 {
  width: 300vw;
  transition: 1s ease;
}
.citoyen-selected .bg-2 {
  width: 0vw;
  transition: 1.5s ease;
}
.citoyen-selected #citoyen-img {
  animation: 1s ease selected forwards;
}
.citoyen-selected #hero-img {
  animation: 0.5s ease disapeard forwards;
}
.citoyen-selected {
  width: 100vw;
  transition: 1s ease;
}
.citoyen-selected .column:nth-child(2) h3 {
  opacity: 0;
  transition: 0.2s ease;
}

/* HERO SELECTED */
.hero-selected .column:nth-child(1) {
  width: 0vw;
  transition: 0.5s ease;
}
.hero-selected .column:nth-child(2) {
  width: 100vw;
  transition: 0.5s ease;
}
.hero-selected .bg-1 {
  width: 0vw;
  transition: 1.7s ease;
}
.hero-selected .bg-2 {
  width: 300vw;
  transition: 1s ease;
}
.hero-selected #citoyen-img {
  animation: 0.5s ease disapeard forwards;
}
.hero-selected #hero-img {
  animation: 1s ease selected forwards;
}
.hero-selected {
  width: 100vw;
  transition: 1s ease;
}
.hero-selected .column:nth-child(1) h3 {
  opacity: 0;
  transition: 0.2s ease;
}

@keyframes disapeard {
  0% {
    width: 40vw;
    opacity: 1;
  }
  80% {
    opacity: 0;
  }
  100% {
    width: 0vw;
    opacity: 0;
  }
}

@keyframes selected {
  0% {
    width: 40vw;
  }
  50% {
    width: 60vw;
  }
  70% {
    width: 60vw;
  }
  100% {
    width: 30vw;
  }
}
</style>
