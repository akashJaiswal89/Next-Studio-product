"use client";

import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type CarouselApi = Parameters<NonNullable<Parameters<typeof Carousel>[0]["setApi"]>>[0];

type GalleryImage = {
  src: string;
  alt: string;
  label: string;
};

export default function ProductImageGallery({
  productName,
  images,
}: {
  productName: string;
  images: GalleryImage[];
}) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;
    const updateCurrent = () => setCurrent(api.selectedScrollSnap());
    updateCurrent();
    api.on("select", updateCurrent);
    api.on("reInit", updateCurrent);
    return () => {
      api.off("select", updateCurrent);
      api.off("reInit", updateCurrent);
    };
  }, [api]);

  return (
    <div className="product-gallery">
      <Carousel setApi={setApi} opts={{ align: "start", loop: true }} aria-label={`${productName} photos`}>
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={image.src} aria-label={`${index + 1} of ${images.length}: ${image.label}`}>
              <figure className="product-gallery-figure">
                <div className="product-gallery-image">
                  <img src={image.src} alt={image.alt} loading={index === 0 ? "eager" : "lazy"} />
                </div>
                <figcaption>{image.label}{image.label !== "Product photo" ? <span>Illustrative view</span> : null}</figcaption>
              </figure>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="product-gallery-prev" aria-label={`Previous ${productName} photo`} />
        <CarouselNext className="product-gallery-next" aria-label={`Next ${productName} photo`} />
      </Carousel>
      <div className="product-gallery-thumbnails" aria-label="Choose product photo">
        {images.map((image, index) => (
          <button
            type="button"
            key={image.src}
            className={current === index ? "is-active" : ""}
            aria-label={`Show ${image.label.toLowerCase()} for ${productName}`}
            aria-current={current === index ? "true" : undefined}
            onClick={() => api?.scrollTo(index)}
          >
            <img src={image.src} alt="" loading="lazy" />
            <span>{image.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
