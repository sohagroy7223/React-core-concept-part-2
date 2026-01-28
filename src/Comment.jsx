export default function Comment({ comment }) {
  //   console.log(comment);
  const { name, email } = comment;
  return (
    <div className="cards">
      <h3>name: {name}</h3>
      <p>email:{email} </p>
    </div>
  );
}
