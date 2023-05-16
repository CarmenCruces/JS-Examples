const apiKey = 'mi api key';

const peticion = fetch(
`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`
);

peticion
    .then( resp => resp.json() )
    //Desestructuramos la respuesta del api y recogemos la propiedad “data”
    .then( ({ data }) => {
        //Seguimos desestructurando y del objeto “data”, recogemos la url de “data.images.original”
        const { url } = data.images.original;
        
        //Construimos un elemento de tipo imagen y le asignamos la url de la imagen.
        const img = document.createElement('img');
        img.src = url;
        //Concatenamos el elemento al documento.
        document.body.append( img );


    })//Si hay error lo mostramos por consola.
    .catch( (error) =>console.warn(error) );
