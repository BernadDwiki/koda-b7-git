const url = "https://jsonplaceholder.typicode.com/users";
function lower(result){
    let i = 0
    let arr = []
    while (i<result.length ){
    arr[i] = result[i].email.toLowerCase()
    i++
    }
    return arr
}

function lowerManual(result){
    let i = 0;
    let arr = [];
    while(i<result.length){
        let email = result[i].email
        let j=0
        let hasil = ""
        while(j<email.length){
            let asci = email.charCodeAt(j)

            if(asci >= 65 && asci <= 90){
                hasil += String.fromCharCode(asci + 32)
            }else{
                hasil += email[j]
            }
            j++
        }
        arr[i] = hasil
        i++
    }
    return arr
}

fetch(url)
    .then(response => {
        if (!response.ok) {
            throw response.status
        }
        return response.json()
    })
    .then(result => {
        console.log(lowerManual(result))
    })
    .catch(err => {
        console.log("error", err)
    });

/*
(async () => {
    try {
        const response = await fetch(url)
        if (!response.ok) {
            throw response.status
        }
        const result = await response.json()
        console.log(lowerManual(result))
    } catch (err) {
        console.log("error", err)
    }
})();
*/

/*
fetch(url)
    .then(response => {
        if (!response.ok) {
            throw response.status
        }
        return response.json()
    })
    .then(result => {
        console.log(lower(result))
    })
    .catch(err => {
        console.log("error", err)
    });
*/

/*
(async () => {
    try {
        const response = await fetch(url)
        if (!response.ok) {
            throw response.status
        }
        const result = await response.json()
        console.log(lower(result))
    } catch (err) {
        console.log("error", err)
    }
})();
*/