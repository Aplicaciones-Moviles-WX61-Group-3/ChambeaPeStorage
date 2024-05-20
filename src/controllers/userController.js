export class UserController {
    constructor({ userService }) {
        this.userService = userService;
    }

    getAllUsers = async (req, res) => {
        try {
            const users = await this.userService.getAllUsers();
            res.json(users);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}