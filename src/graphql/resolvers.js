import { auth } from "../model/index.js";

const resolvers = {
  Query: {
    users: async () => auth.find(),
    users: async (_, { id }) => auth.findById(id),
  },
  Mutation: {
    createUser: async (_, { name, email, birthDate, phone, password }) => {
      const user = new auth({
        name,
        email,
        birthDate,
        phone,
        password,
      });
      return user.save();
    },
    updateUser: async (_, { id, name, email, birthDate, phone }) => {
      return auth.findByIdAndUpdate(id, {
        name,
        email,
        birthDate,
        phone,
      });
    },
    deleteUser: async (_, { id }) => {
      return auth.findByIdAndDelete(id);
    },
  },
};

export default resolvers;
