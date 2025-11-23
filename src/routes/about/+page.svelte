<script>
	import Box from '$lib/components/layout/box/Box.svelte';
	import Center from '$lib/components/layout/center/Center.svelte';
	import Stack from '$lib/components/layout/stack/Stack.svelte';
	import Image from '$lib/components/composed/image/Image.svelte';
	import Paragraph from '$lib/components/typography/paragraph/Paragraph.svelte';
	import Headline from '$lib/components/typography/headline/Headline.svelte';
	import Cluster from '$lib/components/layout/cluster/Cluster.svelte';
</script>

<Box class="md:my-8 xl:my-12">
	<Center maxWidth="md">
		<Cluster gap="lg">
			<Box class="min-w-60 flex-2" padding="none">
				<Image
					srcset={[{ href: '/misc/author.webp', width: 1440, height: 1920 }]}
					alt="A profile picture of Italo Doliva"
				/>
			</Box>

			<Stack class="min-w-60 flex-3">
				<Headline>
					Hi, I'm <span class="font-medium">Italo de Oliveira</span> :)
				</Headline>

				<Paragraph>
					I'm a <span class="font-bold">creative front-end developer</span> specialized in
					<span class="font-bold">data visualization</span>-related applications, but not limited to
					them, with 6 years of experience in the IT field.
				</Paragraph>

				<Paragraph>
					I got a strong knowledge in Svelte, SvelteKit, React, Next, HTML, JavaScript, TypeScript,
					Tailwind CSS, D3.js, GSAP. With a keen eye to design, I enjoy refining or designing UI and
					data visualization prototypes on Figma. My previous experience in data analysis and data
					engineering enhances my toolset with Python, SQL, Power BI and Tableau.
				</Paragraph>

				<Paragraph>
					My role in projects range from designing to developing data-centric web apps and front-end
					systems. I care deeply about the code quality, the design consistency and the user
					experience.
				</Paragraph>

				<Paragraph>
					Currently, I'm studying and experimenting with 3D pieces of data visualization using
					THREE.js and GLSL for Shaders.
				</Paragraph>

				<Paragraph>
					<span class="font-bold italic">Let's collaborate?</span><br />Drop me a message through
					<a href="mailto:itdoliva@gmail.com" class="font-bold text-blue">itdoliva@gmail.com</a>
				</Paragraph>
			</Stack>
		</Cluster>
	</Center>
</Box>
