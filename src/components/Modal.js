import ReactDom from 'react-dom';

function Modal(props) {

  return ReactDom.createPortal(
    <>
      <button className='top-0 left-0 w-full h-full fixed z-[11] bg-black/30 dark:bg-[#181818]/80' onClick={props.handleCloseModal}/>
      <div className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[12] bg-white dark:bg-black dark:text-white max-w-[650px] lg:max-w-[800px] w-[100%] rounded'>
        {props.children}
      </div>
    </>,
    document.getElementById('portal')
  )
}

export default Modal