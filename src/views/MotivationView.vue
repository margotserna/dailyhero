<template>
  <div class="motivation-page">
    <div class="header">
      <router-link to="/map" class="back">retour</router-link>
      <h1>Devenir un super héro !</h1>
    </div>
    <div class="text">
    <p>Voici quelques conseils pour devenir un super héros du quotidien :</p>
        <ul>
            <li>Écouter les besoins des autres : Pour aider les gens, il est important de comprendre ce qu'ils cherchent et ce dont ils ont besoin. Écoutez attentivement et soyez réceptif à leurs préoccupations.</li>
            <li>Offrir de l'aide : Une fois que vous avez compris les besoins des gens, offrez-leur votre aide. Cela peut aller de petites choses comme tenir la porte pour quelqu'un à des actes plus importants comme aider une personne à trouver un emploi.</li>
            <li>Être un bon communicateur : La communication est clé pour aider les gens. Assurez-vous de parler clairement et de vous faire comprendre.</li>
            <li>Montrer de la compassion : La compassion peut faire une énorme différence dans la vie des gens. Montrez de l'empathie et de la sollicitude envers les autres et ils seront plus enclins à accepter votre aide.</li>
            <li>Être un bon exemple : Les actions parlent plus fort que les mots. Soyez un bon exemple pour les autres en montrant votre générosité, votre détermination et votre persévérance.</li>
            <li>Faire preuve de créativité : Il existe de nombreuses façons d'aider les gens. Soyez créatif et pensez à des solutions originales pour résoudre les problèmes des gens.</li>
            <li>Persévérer : Aider les gens peut parfois être difficile et prendre du temps. Mais ne abandonnez pas. Continuez à travailler dur et à faire preuve de détermination pour aider les gens à surmonter les défis.</li>
        </ul>
        <p>En suivant ces conseils, vous pouvez devenir un super héros du quotidien qui aide les autres et fait une différence positive dans leur vie!</p>
    </div>
  </div>
</template>

<style scoped>
.header {
  background-color: var(--hero-color);
  padding: 20px;
  height: 20vh;
}
.header h1 {
  text-align: center;
  font-size: 1.5em;
  width: 80vw;
  margin-right: auto;
  margin-left: auto;
}
.header {
  text-align: right;
}
.back {
  color: var(--secondary-color);
}
.text{
  padding: 20px;
}
li {
  margin-bottom: 3%;
}
</style>
