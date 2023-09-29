<script lang="ts">
    import { onMount } from 'svelte';
    import * as THREE from 'three';

    let canvas : HTMLCanvasElement;
    const cubeMaterials : any[] = [];

    onMount(async () => {
    	// Create a WebGL renderer and set its size to the size of the canvas
    	const renderer = new THREE.WebGLRenderer({ canvas });
    	renderer.setSize(canvas.clientWidth, canvas.clientHeight);

    	// Create a camera and a scene
    	const camera = new THREE.PerspectiveCamera(75, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
    	const scene = new THREE.Scene();

    	// Create a texture loader
    	const loader = new THREE.TextureLoader();

    	// Load textures and create materials for the cube
    	for (let i = 0; i < 6; i++) {
    		const texture = await loader.loadAsync('pfp.png');
    		texture.colorSpace = THREE.SRGBColorSpace;
    		cubeMaterials.push(new THREE.MeshBasicMaterial({ map: texture }));
    	}

    	// Create a cube geometry and a mesh with the materials
    	const geometry = new THREE.BoxGeometry(1, 1, 1);
    	const cube = new THREE.Mesh(geometry, cubeMaterials);
    	scene.add(cube);

    	// Set the camera position
    	camera.position.z = 1.5;

    	function animate() {
    		// Rotate the cube
    		cube.rotation.x += 0.01;
    		cube.rotation.y += 0.01;

    		// Render the scene
    		renderer.render(scene, camera);

    		// Request the next frame
    		requestAnimationFrame(animate);
    	}

    	// Start the animation

    	// make the canvas background transparent
    	renderer.setClearColor(0x000000, 0);
    	animate();
    });
</script>


<div class="container">


	<header>
		<h1>Andrea Bonari</h1>
		<h4>🚀 Benventi sul mio sito!</h4>
		<br>
		<blockquote>
			<p>Mi piace sviluppare applicazioni utili e videogiochi</p>
		</blockquote>
		<canvas bind:this={canvas}></canvas>
	</header>


	<section>
		<h2>📜 Chi sono?</h2>
		<p>
			Sono un giovane sviluppatore autodidatta con una passione per la creazione di applicazioni utili
			e videogiochi.
		</p>

		<p>Ho esperienza nelle seguenti aree:</p>
		<ul>
			<li>Sviluppo frontent e backend (Node/Typescript)</li>
			<li>Sviluppo di giochi (Unity/C#)</li>
			<li>Sviluppo Android (Kotlin/Java)</li>
		</ul>
	</section>

	<section class="left">
		<h2>👩🏽‍🚀 Progetti</h2>

		<p>
			Ho sviluppato molteplici progetti, dai semplici giochi alle applicazioni più complesse. Alcune
			sono:
		</p>
		<ul>
			<li>Un simulatore di fabbriche in realtà virtuale</li>
			<li>Due piccoli videogiochi creati per dei game jam</li>
			<li>2 plugin di Minecraft</li>
			<li>3 bot di Discord</li>
		</ul>
		<p>E altro...</p>
	</section>

	<section>
		<h2>🏆 Successi</h2>

		<p />
		<ul>
			<li>Ho vinto la Priority Game jam 2022</li>
			<li>
				Sono stato selezionato per partecipare nelle sezioni territoriali delle olimpiadi di
				informatica italiane
			</li>
			<li>Il mio team ha vinto il volo out sis game jam nella categoria artistica</li>
			<li>Ho partecipato a due progetti Erasmus+</li>
		</ul>
	</section>

	<section class="left">
		<h2>🖥️ Lavori precedenti</h2>

		<h3>Autosoft Multimedia SRL</h3>
		<p>
			Ho lavorato come stagista all'Autosoft Multimedia SRL, una ditta che specializza in sviluppo di
			simulatori di guida. È stato il mio primo lavoro come sviluppare software, e sono stato
			responsabile per lo sviluppo di una nuova funzionalità per un prodotto della ditta.
		</p>

		<h3>TSO Data GmbH</h3>
		<p>
			Ho lavorato come stagista alla TSO Data GmbH durante un periodo di scuola lavoro all'estero. La
			ditta è specializzata nella consulenza per database informatici per le aziende, utilizzando
			Microsoft Dynamics Business Central. Durante lo stage ho imparato a utilizzare Business Central,
			C/AL e C/SIDE.
		</p>
	</section>
</div>


<style>
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 1em;
	}

	section {
		border: 1px solid var(--brand);
		border-radius: 1em;
		padding: 1em;
		margin-top: 1em;
		max-inline-size: var(--size-content-4);
		align-self: self-start;
	}

	h1 {
		text-transform: capitalize;
	}

	section.left {
		align-self: self-end;
	}

	ul {
		list-style: outside;
		margin-left: 1em;
	}

	h3 {
		margin-top: 1em;
	}
</style>
