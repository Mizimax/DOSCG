<template>
	<div class="footer-wrapper">
		<div class="footer-container">
			Available on <a href="https://github.com/Mizimax/DOSCG" target="_blank" style="color: white">Github</a>
		</div>
	</div>
</template>

<script>
  export default {
    name: 'Footer',
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

	@import "../scss/_variables.scss";

	.footer-wrapper {
		width: 100%;
		position: sticky;
		top: 100%;
		left: 0;
		background: $primary;

		> .footer-container {
			font-size: 15px;
			max-width: 960px;
			width: 100%;
			padding: 15px;
			text-align: center;
			color: white;
			margin: 0 auto;
		}
	}
</style>
