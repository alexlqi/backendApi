// adminMiddleware.js
const middleware = (req, res, next) => {
    // Aquí iría la lógica para validar si el usuario es un administrador
    // Por ejemplo, podrías verificar si el usuario tiene un rol de administrador en la base de datos
  
    const isAdmin = true; // Variable de ejemplo para indicar si el usuario es administrador o no
  
    if (!isAdmin) {
      return res.status(403).json({ message: 'El usuario no tiene permisos de administrador' });
    }
  
    // Si el usuario es administrador, pasa al siguiente middleware o al controlador
    console.log("adminMiddleware.js");
    next();
  };
  
module.exports = middleware;
  