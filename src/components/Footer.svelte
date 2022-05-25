<!-- HTML -->
<footer>
	<h1>Made with <span>♥</span> by <a href='https://peakd.com/@soushi888' target='_blank'>@Soushi888</a></h1>
	<span id='top-btn' on:click={() => document.documentElement.scrollTop = 0}>Top</span>
</footer>

<!-- SCSS -->
<style lang='scss'>
  footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 var(--marge);
    height: 200px;
    background: var(--background-dark);
    color: var(--background-light);

    h1 {
      font-size: 3rem;
      font-weight: 600;

      span {
        color: red;
      }
    }

		a {
			color: #1d54ad;

			&:hover {
				color: #073f98;
			}
		}

    #top-btn {
      font-weight: 600;
      background: var(--background-light);
      color: var(--background-dark);
      padding: 8px;
      border-radius: 10px;
      cursor: pointer;

      &:hover {
        background: #949494;
      }
    }
  }
</style>
