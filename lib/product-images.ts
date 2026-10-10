type ProductWithImages = {
  slug: string;
  name: string;
  image: string;
};

export function getProductImages(product: ProductWithImages) {
  const images = [
    { src: product.image, alt: `${product.name} product photo`, label: "Product photo" },
    {
      src: `/assets/products/gallery/${product.slug}-installed.webp`,
      alt: `Illustrative view of ${product.name} installed in a studio`,
      label: "Installed view",
    },
    {
      src: `/assets/products/gallery/${product.slug}-detail.webp`,
      alt: `Illustrative detail view of ${product.name} in use`,
      label: "Use & detail",
    },
  ];

  if (product.slug === "white-diffuser-cloth") {
    [images[0], images[2]] = [images[2], images[0]];
  }

  return images;
}
