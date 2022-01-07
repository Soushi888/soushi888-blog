<script>
	import Sacha from '/images/avatar.png';
	import githubIcon from '/images/github_icon.svg';
	import linkedInIcon from '/images/linkedin_icon.png';
</script>

<div id='TopBar'>
	<img src={Sacha} alt='Sacha Pignot' />
	<h1>Sacha Pignot</h1>
	<div>
		<a href='/'>Accueil</a>
		<a href='/blog'>Blog</a>
	</div>
	<div>
		<a href='/'><img src={githubIcon} alt='Github logo'></a>
		<a href='/'><img src={linkedInIcon} alt='LinkedIn logo'></a>
	</div>
</div>

<style lang='scss'>
	//@import "../styles/variables";

  #TopBar {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100px;
    background: #383737;

    h1 {
      font-size: 2.8rem;
      color: #C4C4C4;
      //color: $space;
    }

    img {
      height: 80px;
      border-radius: 50%;
    }

    div {
      display: flex;
      gap: 20px;
      background: #C4C4C4;
      padding: 10px 15px;
			height: 30px;
      -webkit-border-radius: 25px;
      -moz-border-radius: 25px;
      border-radius: 30px;

      a {
        text-decoration: none;
        font-size: 24px;

        img {
          height: 30px;
          border-radius: 25%;

					&:hover {
            filter: brightness(0) saturate(100%) invert(12%) sepia(49%) saturate(5964%) hue-rotate(357deg) brightness(94%) contrast(118%);
					}
        }

        &:hover {
          text-decoration: underline;
        }

        &:visited {
          color: initial;
        }
      }
    }
  }
</style>
