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

    getUserById = async (req, res) => {
        try {
            const user = await this.userService.getUserById(req.params.id_user);
            res.json(user);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    createUser = async (req, res) => {
        try {
            const user = await this.userService.createUser(req.body);
            res.status(201).json(user);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    deleteUser = async (req, res) => {
        try {
            await this.userService.deleteUser(req.params.id_user);
            res.status(204).json();
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    addImageUrl = async (req, res) => {
        try {
            const user = await this.userService.addImageUrl(req.params.id_user, req.body.imageUrl);
            res.json(user);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    removeImageUrl = async (req, res) => {
        try {
            const user = await this.userService.removeImageUrl(req.params.id_user, req.body.imageUrl);
            res.json(user);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}
