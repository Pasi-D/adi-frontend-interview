import { IProduct } from "../types";

export async function getProduct(id: string): Promise<IProduct | null> {
  try {
    const res = await fetch(`https://dummyapi.online/api/products/${id}`);
    if (!res.ok) throw new Error("Failed to fetch product");
    return res.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}
