import { Client, Databases, Storage } from 'appwrite';
import conf from '../conf';

export class ProductService {
  client = new Client();
  databases;
  storage;

  constructor() {
    this.client.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectId);
    this.databases = new Databases(this.client);
    this.storage = new Storage(this.client);
  }

  async createProduct(product) {
    try {
      return await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteProductsCollectionId,
        'unique()',
        product
      );
    } catch (error) {
      throw error;
    }
  }

  async getProducts() {
    try {
      const response = await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteProductsCollectionId
      );
      return response.documents;
    } catch (error) {
      throw error;
    }
  }

  async updateProduct(productId, updates) {
    try {
      return await this.databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteProductsCollectionId,
        productId,
        updates
      );
    } catch (error) {
      throw error;
    }
  }

  async deleteProduct(productId) {
    try {
      return await this.databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteProductsCollectionId,
        productId
      );
    } catch (error) {
      throw error;
    }
  }

  async uploadProductImage(file) {
    try {
      return await this.storage.createFile(
        conf.appwriteBucketId,
        'unique()',
        file
      );
    } catch (error) {
      throw error;
    }
  }

  async getProductImageUrl(imageId) {
    try {
      return this.storage.getFilePreview(
        conf.appwriteBucketId,
        imageId
      ).href;
    } catch (error) {
      throw error;
    }
  }
}

const productService = new ProductService();

export default productService;
