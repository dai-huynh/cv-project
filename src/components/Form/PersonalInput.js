import Input from "./Input";

const PersonalInput = ({ obj, setObj }) => {
  return (
    <div className="form-control">
      <Input keyName="name" obj={obj} setObj={setObj} />
      <Input keyName="address" obj={obj} setObj={setObj} />
      <Input keyName="phone" type="tel" obj={obj} setObj={setObj} />
      <Input keyName="email" type="email" obj={obj} setObj={setObj} />
      <Input keyName="github" obj={obj} setObj={setObj} />
    </div>
  );
};

export default PersonalInput;
