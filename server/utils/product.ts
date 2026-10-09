interface ProductInput {
  name: string;
  description: string;
  price: number;
  image: string;
}

export function validateProductInput(data: unknown): ProductInput | false {
  if (!data || typeof data !== "object" || Array.isArray(data)) {
    return false;
  }

  const product = data as Record<string, unknown>;
  if (
    typeof product.name !== "string" ||
    !product.name.trim() ||
    typeof product.description !== "string" ||
    typeof product.price !== "number" ||
    !Number.isInteger(product.price) ||
    product.price < 0 ||
    typeof product.image !== "string" ||
    !product.image.trim()
  ) {
    return false;
  }

  return {
    name: product.name.trim(),
    description: product.description.trim(),
    price: product.price,
    image: product.image.trim(),
  };
}
