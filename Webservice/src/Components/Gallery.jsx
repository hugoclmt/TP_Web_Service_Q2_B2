import Photo from './Photo';

const Gallery = () => {
    const pics = [
        {
            id : 20,
            Size : {
                width : 100,
                height : 100
            }
        },
        {
            id : 25,
            Size : {
                width : 100,
                height :100
            }
        },
        {
            id : 30,
            Size : {
                width : 100,
                height : 100
            }
        }
    ];

    return ( 
        <div> 
            <h1>Galerie de photos</h1>
            <div id='photos'>
                <Photo photos={pics} />
            </div>
        </div>
    );
};

export default Gallery; // This is a functional component