import { Component } from "react";

export class App extends Component {
  constructor() {
    super();
    this.state = {
      contacts: [],
      name: "",
      email: "",
      isEditing: false,
      editIndex: null,
    };
  }

  // Load contacts from localStorage on first render
  componentDidMount() {
    const savedContacts = JSON.parse(localStorage.getItem("contacts"));
    if (savedContacts) {
      this.setState({ contacts: savedContacts });
    }
  }

  // Save contacts to LocalStorage whenever they change
  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

  // Handle input changes
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  // Add new contact
  addContact = () => {
    const { name, email, contacts } = this.state;

    if (name === "" || email === "") {
      alert("Please fill both fields");
      return;
    }

    const newContact = { name, email };

    this.setState({
      contacts: [...contacts, newContact],
      name: "",
      email: "",
    });
  };

  // Edit contact
  editContact = (index) => {
    const contact = this.state.contacts[index];

    this.setState({
      name: contact.name,
      email: contact.email,
      isEditing: true,
      editIndex: index,
    });
  };

  // Update contact
  updateContact = () => {
    const { name, email, editIndex, contacts } = this.state;

    const updatedContacts = [...contacts];
    updatedContacts[editIndex] = { name, email };

    this.setState({
      contacts: updatedContacts,
      name: "",
      email: "",
      isEditing: false,
      editIndex: null,
    });
  };

  // Delete contact
  deleteContact = (index) => {
    const updatedContacts = this.state.contacts.filter(
      (item, i) => i !== index
    );

    this.setState({ contacts: updatedContacts });
  };

  render() {
    return (
      <div style={{ padding: "20px" }}>
        <h2>Contact Manager</h2>

        <div>
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />

          <input
            type="email"
            placeholder="Email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />

          {!this.state.isEditing ? (
            <button onClick={this.addContact}>Add Contact</button>
          ) : (
            <button onClick={this.updateContact}>Update Contact</button>
          )}
        </div>

        <h3>Contacts List</h3>
        <ul>
          {this.state.contacts.length === 0 ? (
            <p>No contacts found</p>
          ) : (
            this.state.contacts.map((item, index) => (
              <li key={index}>
                {item.name} — {item.email}{" "}
                <button onClick={() => this.editContact(index)}>Edit</button>{" "}
                <button onClick={() => this.deleteContact(index)}>
                  Delete
                </button>
              </li>
            ))
          )}
        </ul>
      </div>
    );
  }
}
