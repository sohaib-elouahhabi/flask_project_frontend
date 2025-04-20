import axiosInstance from '../../../services/axiosInstance';

export const fetchCategories = async () => {
  const response = await axiosInstance.get('/categories/');
  return response.data.categories || [];
};

// export const createCategory = async (categoryData: { name: string }) => {
//   const response = await axiosInstance.post('/categories', categoryData);
//   return response.data;
// };

// export const deleteCategory = async (categoryId: number) => {
//   const response = await axiosInstance.delete(`/categories/${categoryId}`);
//   return response.data;
// };