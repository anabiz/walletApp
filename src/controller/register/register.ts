import { Request, Response } from "express";
import { createUser } from "../../services/userService";
import { validateUsers } from "../../schema/validation/index";
import { encrypt } from "../../util";

const register = async (req: Request, res: Response) => {
    const { error, value } = validateUsers(req.body);
    try {
        if (!error) {
            const hash = await encrypt(value.password);
            value.password = hash;
            const user = await createUser(value);
            res.status(200).json({ message: user });
            return;
        }
        res.status(400).json({ message: error.message })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
};

export default register;