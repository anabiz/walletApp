import bcrypt from "bcrypt";

export const encrypt = async (password: string): Promise<string> => {
    const salt = await bcrypt.genSalt(12);
    const hash = await bcrypt.hash(password, salt);
    return hash;
  };