import axios from "axios";
import { useEffect, useState } from "react";

const IndexPage = () => {
	const [users, setUsers] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState();

	useEffect(() => {
		setIsLoading(true);

		axios
			.get("/api/users")
			.then((response) => {
				setUsers(response.data);
				setError();
			})
			.catch((error) => {
				setError(error.response?.data || error.response || error);
				setUsers([]);
			})
			.finally(() => setIsLoading(false));
	}, []);

	return (
		<div className="container">
			{isLoading && "Loading..."}
			{error && (error.message || "Failed to load users.")}
			{!error && !isLoading && (
				<>
					<h1>Users:</h1>
					<ul>
						{users.map((user) => (
							<li key={user.id}>{user.name}</li>
						))}
					</ul>
				</>
			)}
			<style jsx global>{`
				* {
					box-sizing: border-box;
				}

				body,
				html {
					margin: 0;
					padding: 0;
					letter-spacing: 0.1rem;
					font-family: -apple-system, BlinkMacSystemFont, "Segoe UI",
						Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans",
						"Helvetica Neue", sans-serif;
				}
			`}</style>
			<style jsx>{`
				.container {
					display: flex;
					width: 100vw;
					height: 100vh;
					align-items: center;
					justify-content: center;
					flex-direction: column;
				}

				ul {
					list-style: none;
					padding: 0;
					line-height: 2;
				}
			`}</style>
		</div>
	);
};

export default IndexPage;
