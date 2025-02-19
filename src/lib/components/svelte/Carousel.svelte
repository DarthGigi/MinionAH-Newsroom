<script lang="ts">
  import * as Card from "$lib/components/ui/card/index.ts";
  import { type CarouselAPI } from "$lib/components/ui/carousel/context.ts";
  import * as Carousel from "$lib/components/ui/carousel/index.ts";
  import { getMediaType } from "$lib/utilities";
  import Autoplay from "embla-carousel-autoplay";
  import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";

  const { items = [], showSlideNumbers = true }: { items: string[]; showSlideNumbers: boolean } = $props();

  const plugin = Autoplay({ delay: 3000, stopOnInteraction: true });

  let api = $state<CarouselAPI>();
  let current = $state(0);

  const count = $derived(api ? api.scrollSnapList().length : 0);

  $effect(() => {
    if (api) {
      current = api.selectedScrollSnap() + 1;
      api.on("select", () => {
        current = api!.selectedScrollSnap() + 1;
      });
    }
  });
</script>

<Carousel.Root
  setApi={(emblaApi) => (api = emblaApi)}
  class="mx-auto p-0"
  opts={{ loop: true }}
  plugins={[plugin, WheelGesturesPlugin({ forceWheelAxis: "y" })]}
  onmouseenter={plugin.stop}
  onmouseleave={() => {
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
