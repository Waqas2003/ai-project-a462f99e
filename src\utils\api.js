const API_URL = 'https://example.com/api';

const api = {
  async getTrips() {
    const response = await fetch(`${API_URL}/trips`);
    return response.json();
  },
};

export default api;