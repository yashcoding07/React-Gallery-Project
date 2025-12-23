const Buttons = (props) => {
  return (
    <div className="flex gap-6 justify-center items-center mt-10">
        <button
          style={{ opacity: props.index === 1 ? 0.5 : 1, cursor: props.index === 1 ? 'not-allowed' : 'pointer', pointerEvents: props.index === 1 ? 'none' : 'auto' }}
          className="cursor-pointer font-semibold bg-yellow-400 px-4 py-2 rounded-lg active:scale-95 text-black text-sm"
          onClick={() => {
            if (props.index > 1) {
              props.setIndex(props.index - 1)
              props.setUserData([]);
            }
          }}
        >Prev</button>
        <h2 className="text-xl text-white font-semibold">{`Page ${props.index}`}</h2>
        <button
          className="cursor-pointer font-semibold bg-yellow-400 px-4 py-2 rounded-lg active:scale-95 text-black text-sm"
          onClick={() => {
            props.setIndex(props.index + 1)
            props.setUserData([]);
          }}
        >Next</button>
      </div>
  )
}

export default Buttons