//salida 1 : insertIntoHeap([], 13);  // altera el array vacío para que sea [undefined, 13]
function insertIntoHeap(heap, val){
    heap.push(undefined);
    heap.push(val);

    for (i=0;i<heap.length;i++){
        console.log("indice=" + i + " valor=" + heap[i]);
    }
}
insertIntoHeap([], 13);  // altera el array vacío para que sea [undefined, 13]



//salida 2 : insertIntoHeap([undefined, 3, 8, 10, 11, 9, 20, 14], 7); // altera el array a [undefined, 3, 7, 10, 8, 9, 20, 14, 11]
let indice_hijo = 0;
let indice_padre=0;
let temp=0
function insertIntoHeap(heap, val){
    heap.push(val);  //inserta al final del array heap
    indice_hijo=heap.length - 1;   //indicer del elemento recien ingresado, al final
    indice_padre= Math.trunc(indice_hijo / 2)  //indice del padre

    while (heap[indice_padre] > heap[indice_hijo] && indice_padre >0){
        temp = heap[indice_hijo];
        heap[indice_hijo] = heap[indice_padre];
        heap[indice_padre] = temp;
        indice_hijo=indice_padre;
        indice_padre= Math.trunc(indice_hijo / 2);  //indice del padre
    }

    for (i=0;i<heap.length;i++){
        console.log("indice=" + i + " valor=" + heap[i]);
    }
   
}
insertIntoHeap([undefined, 3, 8, 10, 11, 9, 20, 14], 7); // altera el array a [undefined, 3, 7, 10, 8, 9, 20, 14, 11]
 