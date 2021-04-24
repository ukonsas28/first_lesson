import axios, { AxiosInstance, AxiosResponse } from "axios";

class Network {
  instance: AxiosInstance;

  constructor(baseURL: string) {
    this.instance = axios.create({
      baseURL,
      timeout: 10000,
    });
  }

  public async getRequest(path: string): Promise<AxiosResponse> {
    try {
      const response = await this.instance.get(path);
      return response;
    } catch (e) {
      console.log(e);
      throw new Error(e.message);
    }
  }
}

const network = new Network("https://rickandmortyapi.com/api");

export default network;
