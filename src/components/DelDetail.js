const DelDetail = ({ delFnc, index }) => {
  return (
    <div className="btn delete" onClick={() => delFnc(index)}>
      X
    </div>
  );
};

export default DelDetail;
