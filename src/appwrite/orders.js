import { Client, Databases } from 'appwrite';
import conf from '../conf';

export class OrderService {
  client = new Client();
  databases;

  constructor() {
    this.client.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectId);
    this.databases = new Databases(this.client);
  }

  async createOrder(order) {
    try {
      return await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteOrdersCollectionId,
        'unique()',
        order
      );
    } catch (error) {
      throw error;
    }
  }

  async getOrders() {
    try {
      const response = await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteOrdersCollectionId
      );
      return response.documents;
    } catch (error) {
      throw error;
    }
  }

  async updateOrder(orderId, updates) {
    try {
      return await this.databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteOrdersCollectionId,
        orderId,
        updates
      );
    } catch (error) {
      throw error;
    }
  }

  async deleteOrder(orderId) {
    try {
      return await this.databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteOrdersCollectionId,
        orderId
      );
    } catch (error) {
      throw error;
    }
  }
}

const orderService = new OrderService();

export default orderService;
