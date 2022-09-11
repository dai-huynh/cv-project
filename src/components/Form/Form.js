import PersonalInput from "./PersonalInput";

const Form = ({ personal, updatePersonal }) => {
  return (
    <form className="form-container">
      <PersonalInput obj={personal} setObj={updatePersonal} />
    </form>
  );
};

export default Form;
