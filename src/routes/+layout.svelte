<script lang="ts">
	import { initializeApp } from "firebase/app";
	import { getAnalytics, isSupported } from "firebase/analytics";

	import Footer from './footer.svelte';
	import Header from './header.svelte';
	import PageTransition from './transition.svelte';

	import 'open-props/style';
	import 'open-props/normalize';
	import 'open-props/buttons';
	import '../app.css';

	export let data;

	const firebaseConfig = {
		apiKey: "AIzaSyD-MF55EQwbaa_N57n9OyHnAFY7OifjcU8",
		authDomain: "svasso-spensierato.firebaseapp.com",
		projectId: "svasso-spensierato",
		storageBucket: "svasso-spensierato.appspot.com",
		messagingSenderId: "800382437915",
		appId: "1:800382437915:web:5a555e1e436e37147a46be",
		measurementId: "G-882R7BS7B4"
	};

	const app = initializeApp(firebaseConfig);

	isSupported().then(supported => {
		if(supported) getAnalytics(app);
	});
</script>

<div class="layout">
	<Header />

	<main>
		<PageTransition url={data.url}>
			<slot />
		</PageTransition>
	</main>

	<Footer />
</div>

<style>
	.layout {
		height: 100%;
		max-inline-size: 1440px;
		display: grid;
		grid-template-rows: auto 1fr auto;
		margin-inline: auto;
		padding-inline: var(--size-7);
	}

	main {
		padding-block: var(--size-9);
	}

	@media (min-width: 1440px) {
		.layout {
			padding-inline: 0;
		}
	}
</style>
