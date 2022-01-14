<!-- JS -->
<script>
	import { page } from '$app/stores';
	import Avatar from '/static/images/avatar.png';
	import githubIcon from '/static/images/github_icon.svg';
	import linkedInIcon from '/static/images/linkedin_icon.png';
</script>

<!-- HTML -->
<top-bar id='TopBar'>
	<logo>
		<a href='/'><img src={Avatar} alt='Sacha Pignot' /></a>
		<h1>Soushi888</h1>
	</logo>

	<nav>
		<a href='/' class:active={$page.path === "/"}>Accueil</a>
		<a href='/blog' class:active={$page.path === "/blog"}>Blog</a>
	</nav>
	<nav>
		<a href='https://github.com/Soushi888' target='_blank'><img src={githubIcon} alt='Github logo'></a>
		<a href='https://www.linkedin.com/in/sacha-pignot/' target='_blank'><img src={linkedInIcon} alt='LinkedIn logo'></a>
	</nav>
</top-bar>

<!-- CSS -->
<style lang='scss'>
  #TopBar {
    display: flex;
    justify-content: space-between;
    padding: 0 var(--marge);
    align-items: center;
    height: 100px;
    background: var(--background-dark);

    h1 {
      font-size: 2.8rem;
      color: var(--background-light);
    }

    img {
      box-sizing: border-box;
      height: 80px;
      border-radius: 50%;


    }

    logo {
      display: flex;
      align-items: center;
      gap: var(--space);

      img {
        transition: 100ms ease all;

        &:hover {
          border: var(--red) 2px solid;
        }
      }
    }

    nav {
      display: flex;
      gap: 20px;
      background: var(--background-light);
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
            filter: var(--red-filter);
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
