import React, { useState } from "react";
import "./Problem-2.css";

const Problem2 = () => {
	const [contacts, setContacts] = useState([]);
	const [UScontacts, setUSContacts] = useState([]);

	const handleAllContacts = () => {
		fetch("https://contact.mediusware.com/api/contacts/")
			.then((res) => res.json())
			.then((data) => setContacts(data.results));
	};

	const handleUSContacts = () => {
		fetch("https://contact.mediusware.com/api/contacts/")
			.then((res) => res.json())
			.then((data) => setContacts(data.results));

		const USContacts = contacts.filter((contact) => contact.country.name === "United States");
		setUSContacts(USContacts);
	};

	return (
		<div className="container">
			<div className="row justify-content-center mt-5">
				<h4 className="text-center text-uppercase mb-5">Problem-2</h4>

				<div className="d-flex justify-content-center gap-3">
					<button
						type="button"
						className="btn btn-lg btn-outline-primary A"
						data-bs-toggle="modal"
						data-bs-target="#ModalA"
						onClick={handleAllContacts}
					>
						All Contacts
					</button>
					<button
						type="button"
						className="btn btn-lg btn-outline-warning B"
						data-bs-toggle="modal"
						data-bs-target="#ModalB"
						onClick={handleUSContacts}
					>
						US Contacts
					</button>
				</div>

				<div className="modal fade" id="ModalA" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
					<div className="modal-dialog">
						<div className="modal-content">
							<div className="modal-header">
								<h1 className="modal-title fs-5" id="exampleModalLabel">
									Modal A
								</h1>
							</div>
							<div>
								<button
									type="button"
									className="btn btn-lg btn-outline-primary A me-2"
									data-bs-toggle="modal"
									data-bs-target="#ModalA"
									onClick={handleAllContacts}
								>
									All Contacts
								</button>
								<button
									type="button"
									className="btn btn-lg btn-outline-warning B me-2"
									data-bs-toggle="modal"
									data-bs-target="#ModalB"
									onClick={handleUSContacts}
								>
									US Contacts
								</button>
								<button type="button" className="btn btn-lg C" data-bs-dismiss="modal">
									Close
								</button>
							</div>

							<div className="modal-body">
								Contacts
								{contacts.map((contact, index) => (
									<li key={index}>{contact.phone}</li>
								))}
							</div>
							<div className="modal-footer">
								<div>
									<input className="form-check-input" type="checkbox" id="checkboxNoLabel" />
									Only Even
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="modal fade" id="ModalB" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
					<div className="modal-dialog">
						<div className="modal-content">
							<div className="modal-header">
								<h1 className="modal-title fs-5" id="exampleModalLabel">
									Modal B
								</h1>
							</div>
							<div>
								<button
									type="button"
									className="btn btn-lg btn-outline-primary A me-2"
									data-bs-toggle="modal"
									data-bs-target="#ModalA"
									onClick={handleAllContacts}
								>
									All Contacts
								</button>
								<button
									type="button"
									className="btn btn-lg btn-outline-warning B me-2"
									data-bs-toggle="modal"
									data-bs-target="#ModalB"
									onClick={handleUSContacts}
								>
									US Contacts
								</button>
								<button type="button" className="btn btn-lg C" data-bs-dismiss="modal">
									Close
								</button>
							</div>

							<div className="modal-body">
								US Contacts
								{UScontacts.map((contact, index) => (
									<li key={index}>{contact.phone}</li>
								))}
							</div>
							<div className="modal-footer">
								<div>
									<input className="form-check-input" type="checkbox" id="checkboxNoLabel" />
									Only Even
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Problem2;
