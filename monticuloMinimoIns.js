//salida 1 : insertIntoHeap([], 13);  // altera el array vacío para que sea [undefined, 13]
function insertIntoHeap(heap, val){
    let indice_hijo = 0;
    let indice_padre=0;
    let temp=0;

    //comprobando si esta vacio
    if (heap.length==0){
        heap.push(undefined);
    }

    //insertando el nuevo valor en el array heap
    heap.push(val);

    //indice del nuevo elemento
    indice_hijo = heap.length - 1;
    indice_padre = Math.trunc(indice_hijo / 2);

    //compara padre e hijo e invierte valores si padre es mayor
    while (heap[indice_padre] > heap[indice_hijo]){
        temp = heap[indice_hijo];
        heap[indice_hijo] = heap[indice_padre];
        heap[indice_padre] = temp;

        indice_hijo=indice_padre;
        indice_padre = Math.trunc(indice_hijo / 2);
    }
    //muestra array heap
    console.log(heap);
}
insertIntoHeap([undefined, 3, 8, 10, 11, 9, 20, 14], 7); // res= [undefined, 3, 7, 10, 8, 9, 20, 14, 11]
