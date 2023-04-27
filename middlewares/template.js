const middleware = (req, res, next) => {
    // Aquí iría la lógica para validar la autenticación del usuario
    // Por ejemplo, podrías verificar si el usuario tiene un token válido en la cabecera de la solicitud
  
    const condicion = true; // Variable de ejemplo para indicar si el usuario está autenticado o no
  
    if (!condicion) {
      return res.status(401).json({ message: 'No se ha autenticado el usuario' });
    }
  
    // Si el usuario está autenticado, pasa al siguiente middleware o al controlador
    next();
  };
  
module.exports = middleware;
  