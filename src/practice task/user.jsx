export default function SingleUser({ person }) {
  //   console.log(person);
  const { name, address, company } = person;
  return (
    <div>
      <h3>name: {name} </h3>
      <h4>company name: {company.name} </h4>
      <p>city : {address.city} </p>
    </div>
  );
}
