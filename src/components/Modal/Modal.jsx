import style from "./Modal.module.scss";

// Todo - create content in this thing
export const Modal = (props) => {
  const { handleModal, isModalOpen } = props;

  return (
    <>
      {isModalOpen && (
        <>
          <div className={style.modalBg}>
            <section className={style.modalStyle}>
              <p>Hello modal</p>
              <button onClick={handleModal}>Close</button>
            </section>
          </div>
        </>
      )}
    </>
  );
};
