import style from "./Modal.module.scss";

// Todo - create content in this thing
// Move fetch image into hook
export const Modal = ({ handleModal, isModalOpen, children }) => {
  return (
    <>
      {isModalOpen && (
        <>
          <div className={style.modalBg}>
            <section className={style.modalStyle}>
              {children}
              <button onClick={handleModal}>Close</button>
            </section>
          </div>
        </>
      )}
    </>
  );
};
