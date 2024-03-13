const Photo = (props) => {
    return (
        <div>
            {props.photos.map((photo) => (
                <div key={photo.id}>
                    <p>{photo.author}{`(#${photo.id})`}</p>
                    <img src={`https://picsum.photos/id/${photo.id}/${photo.width}/${photo.height}`} alt="random" />
                </div>
            ))}
        </div>
    );
   
};


export default Photo; // This is a functional component