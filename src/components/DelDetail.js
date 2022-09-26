import { FiTrash2 } from "react-icons/fi";

const DelDetail = ({ delFnc, index }) => {
  return (
    <FiTrash2 className="btn delete" onClick={() => delFnc(index)}></FiTrash2>
  );
};

export default DelDetail;
