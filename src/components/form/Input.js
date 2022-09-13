const Input = ({ id, data, updateData, onDelete, setter }) => {
  return (
    <div className="input-field">
      <label onDoubleClick={() => onDelete(id, data, setter)}>Add {id}: </label>
      <input
        placeholder={id}
        value={data[id]}
        onChange={(e) => updateData(id, e.target.value)}
      />
    </div>
  );
};

export default Input;
