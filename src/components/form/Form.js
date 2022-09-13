import Input from "./Input";
import AddInput from "./AddInput";
const Form = ({ data, updateData, deleteInput, setter }) => {
  return (
    <div className="form-control">
      <div>Double Click to Delete Input</div>
      {Array.isArray(data) !== true
        ? Object.keys(data).map((key) => {
            return (
              <Input
                key={key}
                id={key}
                data={data}
                updateData={updateData}
                onDelete={deleteInput}
                setter={setter}
              />
            );
          })
        : console.log(data)}
      <AddInput updateData={updateData} />
    </div>
  );
};

export default Form;
