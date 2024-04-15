// dataFetcher.js
import axios from 'axios';

interface Product {
  id: number;
  title: string;
  price: string;
  category: string;
  image: string;
}
  
  export const fetchProductsByCategory = async (categoryEndpoints: string): Promise<Product[]> => {
    try {
      const response = await axios.get<Product[]>(`https://fakestoreapi.com/products/category/${encodeURIComponent(categoryEndpoints)}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching products:', error);
      throw error; 
    }
  };
