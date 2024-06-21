import React, { FC, ReactNode } from "react";
import css from "../styles/Modal.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { modalActions } from "../store/store";
import { SwipeableDrawer } from "@mui/material";

/**
 * The PopupModal component responsible for rendering the Modal into the DOM
 * @param props {element: The element to be rendered to the DOM within the modal}
 * @returns JSX component
 */
const PopupModal: FC<{ element: ReactNode }> = ({ element }) => {
  const dispatch = useDispatch();

  return (
    <>
      <div className={css.modal}>
        <div
          className={css.bg}
          onClick={() => dispatch(modalActions.hide())}
        ></div>
        <div className={css.modal_body}>{element}</div>
      </div>
    </>
  );
};

export default PopupModal;
