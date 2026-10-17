import type { Metadata } from 'next';
import { ProductPage } from '../../../components/Products';
import { product } from '../../../lib/products';
const item = product('pcam');
export const metadata: Metadata = { title: item.name, description: item.summary, alternates: { canonical: '/products/pcam' } };
export default function Page() { return <ProductPage item={item} />; }
