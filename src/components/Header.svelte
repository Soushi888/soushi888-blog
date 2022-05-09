<!-- JS -->
<script>
	import FlowerOfLife from '/static/images/flower-of-life.png';
	import Network from '/static/images/4.1-network.png';
</script>

<!-- HTML -->
<header id='header'>
	<img src='{FlowerOfLife}' alt='Fleur de vie'>
	<div>
		<h2>Citation du jour</h2>
		<p>"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam animi cumque ducimus ea eveniet ipsam odio quis
			repudiandae vitae voluptatibus? Aliquam delectus eius fugit illum minus nemo pariatur quas, similique."</p>
		<p>- Auteur</p>
	</div>
	<img src={Network} alt='Réseau pair à pair'>
</header>

<!-- SCSS -->
<style lang='scss'>
  header {
    display: flex;
    justify-content: space-between;
    padding: var(--marge);
    background: var(--background-yellow);

    @media screen and (max-width: 1350px) {
      flex-wrap: wrap;
			justify-content: space-around;

      div {
        margin: var(--space);
        order: -1;
      }

      img {
        width: 100%;
      }
    }

    @media screen and (max-width: 957px) {
      padding: var(--space);
      flex-direction: column;
      align-items: center;
      gap: var(--space);
    }

    img {
      max-width: 483px;
    }

    div {
      width: 225px;
      align-self: center;

      h2 {
        font-weight: 600;
        font-size: 2rem;
        margin-bottom: var(--space);
      }

      h2, p {
        text-align: center;
      }
    }
  }
</style>
