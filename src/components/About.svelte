<!-- JS -->
<script>
	import Torus from '/static/images/torus.png';
</script>

<!-- HTML -->
<section id='about'>
	<h2>À propos</h2>
	<div class='row'>
		<div class='text-column'>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium alias consectetur culpa delectus dolorem
				error eum explicabo fugiat, ipsa iusto modi non nulla perferendis porro quam reiciendis tempore. Iste. Lorem
				ipsum dolor sit amet, consectetur adipisicing elit. Dolorem earum exercitationem fugiat impedit nulla numquam
				quae! Commodi cumque fugiat harum nisi reprehenderit tempore veritatis vitae voluptate. Adipisci excepturi
				fugiat harum.</p>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium alias consectetur culpa delectus dolorem
				error eum explicabo fugiat, ipsa iusto modi non nulla perferendis porro quam reiciendis tempore. Iste. Lorem
				ipsum dolor sit amet, consectetur adipisicing elit. Dolorem earum exercitationem fugiat impedit nulla numquam
				quae! Commodi cumque fugiat harum nisi reprehenderit tempore veritatis vitae voluptate. Adipisci excepturi
				fugiat harum.</p>
		</div>
		<img src={Torus} alt=''>
		<div class='text-column'>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium alias consectetur culpa delectus dolorem
				error eum explicabo fugiat, ipsa iusto modi non nulla perferendis porro quam reiciendis tempore. Iste. Lorem
				ipsum dolor sit amet, consectetur adipisicing elit. Dolorem earum exercitationem fugiat impedit nulla numquam
				quae! Commodi cumque fugiat harum nisi reprehenderit tempore veritatis vitae voluptate. Adipisci excepturi
				fugiat harum.</p>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium alias consectetur culpa delectus dolorem
				error eum explicabo fugiat, ipsa iusto modi non nulla perferendis porro quam reiciendis tempore. Iste. Lorem
				ipsum dolor sit amet, consectetur adipisicing elit. Dolorem earum exercitationem fugiat impedit nulla numquam
				quae! Commodi cumque fugiat harum nisi reprehenderit tempore veritatis vitae voluptate. Adipisci excepturi
				fugiat harum.</p>
		</div>
	</div>
</section>

<!-- CSS -->
<style lang='scss'>
  #about {
    background: #EBE8CE;
    padding: var(--space) var(--marge);

    h2 {
      text-align: center;
      font-weight: 600;
      font-size: 2rem;
      padding-bottom: var(--space);
    }

    p {
      font-size: 1.3rem;
    }

    .row {
      display: flex;
      justify-content: space-between;
      gap: var(--space);

      .text-column {
        width: 30%;
      }

      img {
        max-width: 450px;
        max-height: 450px;
        border: #193768 3px solid;
        border-radius: 50%;
      }

      @media screen and (max-width: 1000px) {
        flex-direction: column;
        align-items: center;

        .text-column, img {
          width: 100%;
          height: 100%;
        }
      }
    }

    @media screen and (max-width: 1000px) {
      padding: var(--space) var(--marge-sm);
    }
  }
</style>
