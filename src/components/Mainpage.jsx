const Mainpage = (props) => {
    return (
        <div className="h-[80vh] flex flex-wrap gap-6 justify-center items-center">
            {props.printUserData}
        </div>
    )
}

export default Mainpage