import axios from "axios";

class ContraptionService {
  constructor() {
    this.api = axios.create({
      baseURL: `${import.meta.env.VITE_API_URL}/contraptions`,
    });
  }

  create(data) {
    return this.api.post("/", data);
  }

  edit(id, data) {
    return this.api.put(`/${id}`, data);
  }

  delete(id) {
    return this.api.delete(`/${id}`);
  }

  getAll() {
    return this.api.get(`/`);
  }

  getOne(id) {
    return this.api.get(`/${id}`);
  }
}

const contraptionService = new ContraptionService();

export default contraptionService;
