import Contact from "./Contact";

const FavoriteContacts = (props) => {
  return (
    <div
      className="col-12 py-2"
      style={{ borderRadius: "10px", backgroundColor: "lightgray" }}
    >
      <div className="py-2">
        <h5>Favorite Contacts</h5>
        {props.contacts.map((contact, index) => (
          <Contact contact={contact} key={index} />
        ))}
      </div>
    </div>
  );
};
export default FavoriteContacts;
