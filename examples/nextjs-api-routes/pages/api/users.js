import { users } from "../../data";

import allowedMethods from "allowed-methods";

const handler = (req, res) => {
	res.status(200).json(users);
};

export default allowedMethods(["get"])(handler);
