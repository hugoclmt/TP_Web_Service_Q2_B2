const Photo = (props) => {
    return (
        <div>
            {props.photos.map((photo) => (
                <div key={photo.id}>
                    <img src={`https://picsum.photos/id/${photo.id}/${photo.Size.width}/${photo.Size.height}`} alt="random" />
                </div>
            ))}
        </div>
    );
   
};


export default Photo; // This is a functional component