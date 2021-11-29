import { UserModel } from "../../models/usuario/Usuarios";
import bcrypt from 'bcrypt';
import { generateToken } from '../../utils/tokenUtils';

const resolversAutenticacion = {
  Mutation: {
    registro: async (parent, args) => {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(args.contrasena, salt);
      const usuarioCreado = await UserModel.create({
        nombre: args.nombre,
        identificacion: args.identificacion,
        correo: args.correo,
        rol: args.rol,
        contrasena: hashedPassword,
      });
     
      console.log('usuario creado', usuarioCreado);
      return {
        token: generateToken({
          _id: usuarioCreado._id,
          nombre: usuarioCreado.nombre,
          identificacion: usuarioCreado.identificacion,
          correo: usuarioCreado.correo,
          rol: usuarioCreado.rol,
        }),
      };
    },

    login: async (parent, args) => {
      const usuarioEncontrado = await UserModel.findOne({ correo: args.correo });
      if (await bcrypt.compare(args.contrasena, usuarioEncontrado.contrasena)) {
        return {
          token: generateToken({
            _id: usuarioEncontrado._id,
            nombre: usuarioEncontrado.nombre,
            identificacion: usuarioEncontrado.identificacion,
            correo: usuarioEncontrado.correo,
            rol: usuarioEncontrado.rol,
          }),
        };
       
      }
      else{
          return "null"
      }
    },

    // refreshToken: async (parent, args, context) => {
    //   console.log('contexto', context);
    //   if (!context.userData) {
    //     return {
    //       error: 'token no valido',
    //     };
    //   } else {
    //     return {
    //       token: generateToken({
    //         _id: context.userData._id,
    //         nombre: context.userData.nombre,
    //         apellido: context.userData.apellido,
    //         identificacion: context.userData.identificacion,
    //         correo: context.userData.correo,
    //         rol: context.userData.rol,
    //       }),
    //     };
    //   }
    //   // valdiar que el contexto tenga info del usuario. si si, refrescar el token
    //   // si no devolver null para que en el front redirija al login.
    // },
  },
};

export { resolversAutenticacion };