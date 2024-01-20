import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import Autoplay from 'embla-carousel-autoplay'
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures'
import * as React from "react"


export default function MediaCarousel({ items, showSlideNumbers = true }: { items: string[], showSlideNumbers?: boolean}) {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  )

  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)
 
  React.useEffect(() => {
    if (!api) {
      return
    }
 
    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)
 
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  const getMediaType = (item: string) => {
    const extension = item.split('.').pop()?.toLowerCase();
    switch (extension) {
      case 'mp4':
      case 'webm':
      case 'mov':
      case 'ogg':
        return 'video';
      case 'jpg':
      case 'jpeg':
      case 'png':
      case 'gif':
      case 'webp':
        return 'image';
      default:
        return 'unknown';
    }
  }

  return (
    <Carousel
    setApi={setApi}
    className="mx-auto p-0"
    opts={{loop: true}}
    plugins={[plugin.current, WheelGesturesPlugin({forceWheelAxis: "y"})]}
    onMouseEnter={plugin.current.stop}
    onMouseLeave={() => { plugin.current.play(); plugin.current.reset(); }}>
      <CarouselContent className="p-0 h-[30rem]">
        {items.map((item, index) => (
          <CarouselItem key={index}>
            <Card className="flex h-full items-center p-0 !bg-neutral-950 justify-center">
              <CardContent className="p-4 flex justify-center rounded-lg items-center">
                {(() => {
                  switch (getMediaType(item)) {
                    case 'image':
                      return <img src={item} alt="media" className="pointer-events-none max-h-96 !w-auto mx-auto" />;
                    case 'video':
                      return (
                        <video className="pointer-events-none max-h-96 !w-auto mx-auto" autoPlay={true} muted={true} loop={true}>
                          <source src={item} type={`video/${item.split('.').pop()}`}/>
                        </video>
                      );
                    default:
                      return <p>Unsupported media type</p>;
                  }
                })()}
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
      {showSlideNumbers && (
        <div className="py-2 text-center text-sm text-neutral-600 hover:text-neutral-400 transition-colors duration-300">
          Slide {current} of {count}
        </div>
      )}
    </Carousel>
  )
}