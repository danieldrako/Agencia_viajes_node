
const guardarTestimonial = (req,res) => { 
    
   //? Validar

    const { nombre, correo, mensaje} = req.body;

    const errores = [];

    if(nombre.trim() === ''){
        errores.push('El nombre está vacio')
    }

    if(correo.trim() === ''){
        errores.push('El correo está vacio')
    }

    if(mensaje.trim() === ''){
        errores.push('El mensaje está vacio')
    }

 }

 export {
    guardarTestimonial
 } 