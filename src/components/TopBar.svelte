<!-- JS -->
<script>
	import { page } from '$app/stores';
	import Sacha from '/static/images/avatar.png';
	import githubIcon from '/static/images/github_icon.svg';
	import linkedInIcon from '/static/images/linkedin_icon.png';

	console.log($page.params);
</script>

<!-- HTML -->
<div id='TopBar'>
	<a href='/'><img src={Sacha} alt='Sacha Pignot' /></a>
	<h1>Sacha Pignot</h1>
	<nav>
		<a href='/' class:active={$page.path === "/"}>Accueil</a>
		<a href='/blog' class:active={$page.path === "/blog"}>Blog</a>
	</nav>
	<nav>
		<a href='https://github.com/Soushi888' target='_blank'><img src={githubIcon} alt='Github logo'></a>
		<a href='https://www.linkedin.com/in/sacha-pignot/' target='_blank'><img src={linkedInIcon} alt='LinkedIn logo'></a>
	</nav>
</div>

<!-- CSS -->
<style lang='scss'>
  #TopBar {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100px;
    background: #383737;

    h1 {
      font-size: 2.8rem;
      color: #C4C4C4;
    }

    img {
      height: 80px;
      border-radius: 50%;
    }

    div, nav {
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

        &.active {
          color: #e10d0d;
        }
      }
    }
  }
</style>
