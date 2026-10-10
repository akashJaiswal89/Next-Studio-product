"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { getProductImages } from "@/lib/product-images";

type Product = { slug: string; name: string; image: string };
type CarouselApi = Parameters<NonNullable<Parameters<typeof Carousel>[0]["setApi"]>>[0];

export default function ProductCardImageCarousel({ product }: { product: Product }) {
  const images = getProductImages(product);
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
    <div className="product-card-gallery">
      <Carousel setApi={setApi} opts={{ align: "start", loop: true }} aria-label={`${product.name} photos`}>
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={image.src} aria-label={`${index + 1} of ${images.length}: ${image.label}`}>
              <Link
                className="product-image-link"
                href={`/products/${product.slug}`}
                aria-label={`View ${product.name} details`}
                tabIndex={current === index ? 0 : -1}
              >
                <div className="card-img">
                  <img src={image.src} alt={image.alt} loading="lazy" />
                </div>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="product-card-prev" aria-label={`Previous ${product.name} photo`} />
        <CarouselNext className="product-card-next" aria-label={`Next ${product.name} photo`} />
      </Carousel>
      <div className="product-card-gallery-dots" role="group" aria-label={`Choose ${product.name} photo`}>
        {images.map((image, index) => (
          <button
            type="button"
            key={image.src}
            className={current === index ? "is-active" : ""}
            aria-label={`Show ${image.label.toLowerCase()} for ${product.name}`}
            aria-current={current === index ? "true" : undefined}
            onClick={() => api?.scrollTo(index)}
          />
        ))}
      </div>
    </div>
  );
}
