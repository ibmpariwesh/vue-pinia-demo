import { defineStore } from 'pinia';

// import { fetchWrapper } from '@/helpers';
// import { useAuthStore } from '@/stores';

// const baseUrl = `${import.meta.env.VITE_API_URL}/products`;
console.log('test');
export const useProductsStore = defineStore({
    id: 'products',
    state: () => ({
        products: [{
            name: 'product1'
        }]
    }),
    actions: {
        async save(product){
          console.log('action', product);  
          console.log(this.products);
          this.products.push(product);
        },
        async getAll() {
            
            // this.products = { loading: true };
            // try {
            //     this.products = await fetchWrapper.get(baseUrl);
            // } catch (error) {
            //     this.products = { error };
            // }
        },
    }
})