"use strict:";

class AddressBook {
    constructor() {
    this.contacts = [];
}
add (name, email, phone, relation) {
    let newContact = new Contact(name, email, phone, relation)
    this.contacts.push(newContact);
}
delete (name) {
    const index = this.contacts.findIndex(contact => {
        return contact.name === name;
    });
    if (index >= 0) {
        this.contacts.splice(index, 1);
    }
}
print() {
    for (const contact of this.contacts) {
        console.log(contact);
}
}
}
class Contact {
    constructor(name, email, phone, relation) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.relation = relation;
    }
}
// making an instance
const addressBook = new AddressBook();
addressBook.print();
addressBook.add("Carly", "@gmail", "732", "self");
addressBook.add("Zac", "@gmail", "248", "spouse");
addressBook.print();
addressBook.delete("Zac");
addressBook.print();