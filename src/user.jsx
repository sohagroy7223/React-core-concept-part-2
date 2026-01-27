export default function User({ user }) {
  const { name, email, phone } = user;
  return (
    <div className="cards">
      <h4>name: {name}</h4>
      <p>email: {email}</p>
      <p>phone: {phone}</p>
    </div>
  );
}
