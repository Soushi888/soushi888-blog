<!-- JS -->
<script>
	import FlowerOfLife from '/static/images/flower-of-life.png';
	import Network from '/static/images/4.1-network.png';
</script>

<!-- HTML -->
<header>
	<img src='{FlowerOfLife}' alt='Fleur de vie'>
	<div>
		<h2>Citation du jour</h2>
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam animi cumque ducimus ea eveniet ipsam odio quis
			repudiandae vitae voluptatibus? Aliquam delectus eius fugit illum minus nemo pariatur quas, similique.</p>
	</div>
	<img src={Network} alt='Réseau pair à pair'>
</header>

<!-- CSS -->
<style lang='scss'>
  header {
    display: flex;
    justify-content: space-evenly;
    padding: calc(var(--space) * 2) 0;
    background: #FFFCDE;
		
		@media screen and (max-width: 1156px){
			flex-direction: column;
			align-items: center;

			div {
				margin: var(--space);
			}

			img {
				width: 100%;
			}
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
