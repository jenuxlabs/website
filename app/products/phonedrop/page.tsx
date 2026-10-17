import type { Metadata } from 'next';
import { ProductPage } from '../../../components/Products';
import { product } from '../../../lib/products';
const item = product('phonedrop');
export const metadata: Metadata = { title: item.name, description: item.summary, alternates: { canonical: '/products/phonedrop' } };
export default function Page() { return <ProductPage item={item} />; }
