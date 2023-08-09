function callback(n1, n2){
    return n1 + n2;
}

function useCallback(params) {
    console.log(params(10, 20));
}

useCallback(callback);