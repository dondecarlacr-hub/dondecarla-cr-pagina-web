class AppService {
  private urlContacto: string;

  constructor() {
    this.urlContacto = 'https://dondecarla-backend.onrender.com/api/contact';
  }

  async insertarContacto(contacto: {
    nombre: string;
    email: string;
    telefono: string;
    asunto: string;
    mensaje: string;
  }) {
    try {
      const response = await fetch(this.urlContacto, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(contacto)
      });

      if (!response.ok) {
        throw new Error(`Error en la solicitud: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error insertando contacto:', error);
      throw error;
    }
  }
}

export default AppService;