const Input = ({ keyName, type, obj, setObj }) => {
  return (
    <>
      <label>Add {keyName}: </label>
      <input
        type={type}
        placeholder={keyName}
        value={obj[keyName]}
        onChange={(e) => setObj(keyName, e.target.value)}
      />
    </>
  );
};

Input.defaultProps = {
  type: "text",
};

export default Input;
