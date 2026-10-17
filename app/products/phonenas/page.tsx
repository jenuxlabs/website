import type { Metadata } from 'next';
import { ProductPage } from '../../../components/Products';
import { product } from '../../../lib/products';
const item = product('phonenas');
export const metadata: Metadata = { title: item.name, description: item.summary, alternates: { canonical: '/products/phonenas' } };
export default function Page() { return <ProductPage item={item} />; }
