export interface Brand { id: string; name: string; slug: string; }
export interface Category { id: string; name: string; slug: string; }
export interface ProductImage { id: string; url: string; alt: string; cover: boolean; }
export interface ProductVariant { id: string; sku: string; price: number; stock: number; attributes: Record<string, string>; }
export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  brand: Brand;
  category: Category;
  images: ProductImage[];
  variants: ProductVariant[];
  active: boolean;
}
