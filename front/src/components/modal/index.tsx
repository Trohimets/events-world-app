import { useAppDispatch, useAppSelector } from "../../hooks";
import { closeModalWindow } from "../../store/modal";
import { FC, useEffect } from "react";
// import { useLocation } from 'react-router-dom';
import { ModalOoverlay } from "./styled";

interface IModalProps {
  isCanceling?: boolean;
  setIsCanceling?: (arg0: boolean) => void;
  setIsEditing?: (arg0: boolean) => void;
}
export const Modal: FC<IModalProps> = () => {
  const modal = useAppSelector((state) => state.modal);
  const dispatch = useAppDispatch();

  useEffect(() => {
    function closeByEscape(evt: KeyboardEvent) {
      if (evt.key === "Escape") {
        dispatch(closeModalWindow());
      }
    }
    document.addEventListener("keydown", closeByEscape);
    return () => {
      document.removeEventListener("keydown", closeByEscape);
    };
  }, []);

  if (modal.isOpen) {
    return (
      <>
        {modal.isOpen ? (
          <ModalOoverlay
            onClick={(e) => {
              e.stopPropagation(), dispatch(closeModalWindow());
            }}
          ></ModalOoverlay>
        ) : (
          ""
        )}
      </>
    );
  } else return null;
};
