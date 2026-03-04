const a = [5, 10, 2, 8]
console.log(Math.max(...a))

let i = 0;
let max;
while (i<a.length){
    if(i === 0){
        max = a[i]
    }else{
        if(a[i]>max){
            max = a[i];
        }
    }
    i++
}
console.log("Hasil nya : "max)
