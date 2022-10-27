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

    //compara padre e hijo e invierte valores si padre es mayor
    while (heap[indice_hijo - 1] > heap[indice_hijo] && indice_hijo - 1 > 0){
        temp = heap[indice_hijo];
        heap[indice_hijo] = heap[indice_hijo - 1];
        heap[indice_hijo - 1] = temp;

        indice_hijo=indice_hijo - 1;
    }
    //muestra array heap
    for (i=0;i<heap.length;i++){
        console.log("indice=" + i + " valor=" + heap[i]);
    }
}
insertIntoHeap([undefined,23,5], 13);  
