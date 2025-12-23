const Card = (props) => {
    return (
        <a href={props.elem.download_url} target="_blank" rel="noopener noreferrer">
            <div className="h-55 w-60 object-cover rounded-xl overflow-hidden">
                <img className="w-full h-full" src={props.elem.download_url} />
            </div>
            <h3 className="font-bold text-lg">{props.elem.author}</h3>
        </a>
    )
}

export default Card