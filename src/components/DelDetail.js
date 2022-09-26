import { Button } from "@mui/material";

const DelDetail = ({ delFnc, index }) => {
  return (
    <Button className="btn delete" onClick={() => delFnc(index)}>
      Delete
    </Button>
  );
};

export default DelDetail;
