import api from "./api";

export const getOrders = () => {
  return api.get('/orders');
};

export const getProducts = () => {
  return api.get('/products');
};

export const updateOrderStatus = (orderId, status) => {
  return api.put(`/orders/${orderId}/status`, { status });
};

export const validateOrder = (orderId) => {
  return api.put(`/orders/${orderId}/validate`, {});
};

export const updateProductStock = (productId, stock) => {
  return api.put(`/products/${productId}/stock`, { stock });
};
