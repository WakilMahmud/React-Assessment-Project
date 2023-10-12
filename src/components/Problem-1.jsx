import React, { useState } from "react";

const Problem1 = () => {
	const [show, setShow] = useState("all");
	const [users, setUsers] = useState([]);
	const [activeUsers, setActiveUsers] = useState([]);
	const [completedUsers, setCompletedUsers] = useState([]);
	const [showUsers, setShowUsers] = useState([]);

	const handleClick = (val) => {
		setShow(val);

		if (val === "active") {
			const activeUsersList = users.filter((user) => user.status === "active");
			setActiveUsers(activeUsersList);
			setShowUsers(activeUsersList);
		} else if (val === "completed") {
			const completedUsersList = users.filter((user) => user.status === "completed");
			setCompletedUsers(completedUsersList);
			setShowUsers(completedUsersList);
		} else {
			const remainingUsersList = users.filter((user) => user.status !== "active" && user.status !== "completed");
			const combinedUsersList = activeUsers.concat(completedUsers);
			const allUsersList = combinedUsersList.concat(remainingUsersList);
			setShowUsers(allUsersList);
		}
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		let name = event.target.name.value;
		let status = event.target.status.value;

		const user = { name, status: status.toLowerCase() };

		if (name && status) {
			const newUsers = [...users, user];
			setUsers(newUsers);
		}

		event.target.name.value = "";
		event.target.status.value = "";
	};

	return (
		<div className="container">
			<div className="row justify-content-center mt-5">
				<h4 className="text-center text-uppercase mb-5">Problem-1</h4>
				<div className="col-6 ">
					<form onSubmit={handleSubmit} className="row gy-2 gx-3 align-items-center mb-4">
						<div className="col-auto">
							<input type="text" name="name" className="form-control" placeholder="Name" />
						</div>
						<div className="col-auto">
							<input type="text" name="status" className="form-control" placeholder="Status" />
						</div>
						<div className="col-auto">
							<button type="submit" className="btn btn-primary">
								Submit
							</button>
						</div>
					</form>
				</div>
				<div className="col-8">
					<ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
						<li className="nav-item">
							<button className={`nav-link ${show === "all" && "active"}`} type="button" onClick={() => handleClick("all")}>
								All
							</button>
						</li>
						<li className="nav-item">
							<button className={`nav-link ${show === "active" && "active"}`} type="button" onClick={() => handleClick("active")}>
								Active
							</button>
						</li>
						<li className="nav-item">
							<button className={`nav-link ${show === "completed" && "active"}`} type="button" onClick={() => handleClick("completed")}>
								Completed
							</button>
						</li>
					</ul>
					<div className="tab-content"></div>
					<table className="table table-striped ">
						<thead>
							<tr>
								<th scope="col">Name</th>
								<th scope="col">Status</th>
							</tr>
						</thead>
						<tbody>
							{showUsers?.map((user, index) => (
								<tr key={index}>
									<td>{user.name}</td>
									<td>{user.status}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

export default Problem1;
