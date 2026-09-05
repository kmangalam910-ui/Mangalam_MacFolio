import { closeWindow } from "#store/windowSlice";
import { useDispatch } from "react-redux";
import { Popup } from "#components";
import usePopupLogic from "../hooks/usePopupLogic";

const WindowControls = ({ target }) => {

  const {popup, setPopup} = usePopupLogic()
  const dispatch = useDispatch()

  return (
    <>
      <div id="window-controls">
        <button type="button" className="close" aria-label="Close terminal window" onClick={() => dispatch(closeWindow(target))} />
        <button type="button" className="minimize cursor-pointer" aria-label="Minimize terminal window" onClick={() => setPopup(true)} />
        <button type="button" className="maximize cursor-pointer" aria-label="Maximize terminal window" onClick={() => setPopup(true)} />        {popup && <Popup />}
      </div>
    </>
  );
};

export default WindowControls;
