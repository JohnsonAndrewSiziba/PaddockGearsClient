<template>

	<!-- Layout Footer -->
	<a-layout-footer>

		<!-- Footer Navigation Menu -->
<!--		<a-menu mode="horizontal">-->
<!--			<a-menu-item>Company </a-menu-item>-->
<!--			<a-menu-item>About Us</a-menu-item>-->
<!--			<a-menu-item>Team </a-menu-item>-->
<!--			<a-menu-item>Products</a-menu-item>-->
<!--			<a-menu-item>Blog</a-menu-item>-->
<!--			<a-menu-item>Pricing</a-menu-item>-->
<!--		</a-menu>-->
		<!-- / Footer Navigation Menu -->

		<!-- Footer Social Menu -->
		<a-menu mode="horizontal" class="menu-nav-social">

		</a-menu>
		<!-- / Footer Social Menu -->
		
		<!-- Copyright Notice -->
		<p class="copyright">
			Copyright © 2022
			by <a href="/">Paddock Gears</a>.
		</p>
		<!-- / Copyright Notice -->

	</a-layout-footer>
	<!-- / Layout Footer -->

</template>

<script>

	export default ({
		data() {
			return {
			}
		},
	})

</script>

<style lang="scss" scoped>

	.nav-link svg {
		margin-right: 5px;
		vertical-align: middle;
	}
	.nav-link span {
		vertical-align: middle;
	}
	.ant-menu-submenu-popup {
		width: 100%;
	}

</style>