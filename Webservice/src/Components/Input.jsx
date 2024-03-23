const InputBtn = (props) => {
  console.log(props.showIds);
  return (
    <div>
        <input type="checkbox" id="hidden" name="hidden" checked={props.showIds} onChange={(e) => props.setShowIds(e.target.checked)} />
        <label htmlFor="hidden">Hide id</label>
        
    </div>
  );
}

export default InputBtn; // This is a functional component