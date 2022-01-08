<!-- JS -->
<script>
	import Torus from '/static/images/torus.png';
</script>

<!-- HTML -->
<section>
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
	<div class='text-row'>
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi aperiam atque aut blanditiis,
			consequuntur dolor earum, libero maxime minus nisi nostrum nulla numquam obcaecati odit omnis quia tempore vero?
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad asperiores dicta dolorem eius enim est harum hic
			iusto laboriosam minima minus, nam obcaecati officia omnis quaerat quod rem veritatis voluptas.</p>
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad aut culpa distinctio ducimus eligendi eos
			eveniet illum iste maiores nostrum, nulla obcaecati, perferendis praesentium quasi reprehenderit sapiente
			similique tempora.</p>
	</div>
</section>

<!-- CSS -->
<style lang='scss'>
  section {
    background: #EBE8CE;
    padding: 0 calc(var(--space) * 3);

    h2 {
      text-align: center;
      font-weight: 600;
      font-size: 2rem;
      padding: var(--space);
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

    .text-row {
      display: flex;
      flex-direction: column;
      padding: var(--space) 0;
    }
  }
</style>
