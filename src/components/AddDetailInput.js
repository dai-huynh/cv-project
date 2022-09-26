import { TextField } from "@mui/material";

const AddDetailInput = ({ detail }) => {
  return (
    <TextField
      required
      id="outlined-required"
      placeholder={detail}
      name={detail}
    />
  );
};

export default AddDetailInput;
