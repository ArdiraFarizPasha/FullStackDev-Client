export const ButtonYesNo = (props) => {
  return (
    <div className="radio-toolbar">
      <input type="radio" id="buttonYes" name="button" value="yes" checked />
      <label for="buttonYes">Yes</label>

      <input type="radio" id="buttonNo" name="button" value="no" />
      <label for="buttonNo">No</label>
    </div>
  )
}