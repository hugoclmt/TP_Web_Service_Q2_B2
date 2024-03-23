import Photo from './Photo';

const Gallery = (props,props2) => {
    return ( 
        <div> 
            <h1>Galerie de photos</h1>
            <div>  
                <Photo showIds={props.showIds} photos={props.pics} />
            </div>
        </div>
    );
};
export default Gallery; // This is a functional component