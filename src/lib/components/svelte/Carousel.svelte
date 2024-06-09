<script lang="ts">
  import * as Card from "$lib/components/ui/card/index.ts";
  import * as Carousel from "$lib/components/ui/carousel/index.ts";
  import Autoplay from "embla-carousel-autoplay";
  import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";
  import { type CarouselAPI } from "$lib/components/ui/carousel/context.ts";
  import { getMediaType } from "$lib/utilities";

  const plugin = Autoplay({ delay: 3000, stopOnInteraction: true });

  export let items: string[] = [];
  export let showSlideNumbers: boolean = true;

  let api: CarouselAPI;
  let count = 0;
  let current = 0;
  $: if (api) {
    count = api.scrollSnapList().length;
    current = api.selectedScrollSnap() + 1;
    api.on("select", () => {
      current = api.selectedScrollSnap() + 1;
    });
  }
</script>

<Carousel.Root
  bind:api
  class="mx-auto p-0"
  opts={{ loop: true }}
  plugins={[plugin, WheelGesturesPlugin({ forceWheelAxis: "y" })]}
  on:mouseenter={plugin.stop}
  on:mouseleave={() => {
    plugin.play();
    plugin.reset();
  }}
>
  <Carousel.Content class="h-[30rem] p-0">
    {#each items as item}
      <Carousel.Item>
        <Card.Root class="flex h-full items-center justify-center border-border bg-popover p-0">
          <Card.Content class="flex items-center justify-center rounded-lg p-4">
            {#if getMediaType(item) === "image"}
              <img src={item} alt="media" class="pointer-events-none mx-auto max-h-96 !w-auto" />
            {:else if getMediaType(item) === "video"}
              <video class="pointer-events-none mx-auto max-h-96 !w-auto" autoPlay={true} muted={true} loop={true}>
                <source src={item} type={`video/${item.split(".").pop()}`} />
              </video>
            {:else}
              <p>Unsupported media type</p>
            {/if}
          </Card.Content>
        </Card.Root>
      </Carousel.Item>
    {/each}
  </Carousel.Content>
  <Carousel.Previous />
  <Carousel.Next />
  {#if showSlideNumbers}
    <div class="py-2 text-center text-sm text-neutral-600 transition-colors duration-300 hover:text-neutral-400">
      Slide {current} of {count}
    </div>
  {/if}
</Carousel.Root>
