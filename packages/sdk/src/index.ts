export interface SDKOptions {
  baseUrl: string;
}

export class QuipuQClient {
  constructor(private options: SDKOptions) {}

  async getHealth() {
    const res = await fetch(`${this.options.baseUrl}/health`);
    return res.json();
  }
}
