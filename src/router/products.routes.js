import { Layout, ProductList } from '@/views/products';

export default {
    path: '/products',
    component: ProductList,
    children: [
        // { path: '', component: ProductList },
        // { path: 'add', component: AddEdit },
        // { path: 'edit/:id', component: AddEdit }
    ]
};
