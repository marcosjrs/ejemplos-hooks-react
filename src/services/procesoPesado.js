export const procesoPesado = ( iteraciones ) => {

    for( let i = 0; i < iteraciones; i ++ ){
        console.log('Ejecutando proceso pesado');
    }

    return `${ iteraciones } iteraciones realizadas.`;
}