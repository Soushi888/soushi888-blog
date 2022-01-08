<script>
	import '../styles/variables.scss';
</script>

<header>
	<img src='static/images/flower-of-life.png' alt='Fleur de vie'>
	<div>
		<h2>Citation du jour</h2>
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam animi cumque ducimus ea eveniet ipsam odio quis
			repudiandae vitae voluptatibus? Aliquam delectus eius fugit illum minus nemo pariatur quas, similique.</p>
	</div>
	<img src='static/images/4.1-network.png' alt='Réseau pair à pair'>
</header>

<!-- CSS -->
<style lang='scss'>
  @import "../styles/variables.scss";

  header {
    display: flex;
    justify-content: space-evenly;
    padding: calc(var(--space) * 2) 0;
    background: #FFFCDE;

    img {
      height: 483px;
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
