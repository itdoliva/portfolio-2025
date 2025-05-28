<script>
  import Box from "$lib/layouts/Box.svelte";
  import Center from "$lib/layouts/Center.svelte";
  import Stack from "$lib/layouts/Stack.svelte";
  import Sidebar from "$lib/layouts/Sidebar.svelte";
	import Frame from "$lib/layouts/Frame.svelte";
	import Image from "$lib/components/Image.svelte";
</script>

<Box>
  <div class="md:my-8 xl:my-12">
  <Center intrinsic={true}>
      <Stack>
        <Sidebar sideMinWidth="25%" contentMinWidth="45%" sideOn="left" >
          <Image srcset={[{ href: "/misc/author.webp", width: 1440, height: 1920 }]} alt="A profile picture of Italo Doliva" />
          <Stack>
            <h1>Hi, I'm <span class="font-medium">Italo de Oliveira</span> :)</h1>
            <p>
              I'm a <span class="font-bold">creative developer</span> specialized in <span class="font-bold">data visualization</span> with 6 years of experience in the IT field. My previous experience in data analysis and data engineering supports me by underpining my decisions in the design and front-end development of data visualization applications.
            </p>
            <p>
              I got a solid knowledge in HTML, JavaScript, Tailwind CSS, D3.js, GSAP. Although, I often prefer Svelte/SvelteKit as the frameworks of my projects, I also have theoretical and practical knowledge with React/Next. With a keen eye to design, I enjoy refining UI and data visualization prototypes on Figma. In order to clean and analyze data I often pick Python and SQL.
            </p>
            <p>
              My role in projects range from designing to developing data-centric web apps and lightweight front-end systems, but I'm also capable of building performant dashboards in BI tools such as Power BI and Tableau.
            </p>
            <p>
              Currently, I'm studying and experimenting with 3D pieces of data visualization using THREE.js and GLSL for Shaders.
            </p>
            <p>
              <span class="italic font-bold">Let's collaborate?</span><br>Drop me a message through <a href="mailto:itdoliva@gmail.com" class="font-bold text-blue">itdoliva@gmail.com</a>
            </p>
          </Stack>
        </Sidebar>
      </Stack>
    </Center>
  </div>
</Box>
