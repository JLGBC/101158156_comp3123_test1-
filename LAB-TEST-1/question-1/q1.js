const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings']

const lowerCaseWords = (words) =>
    new Promise ((resolve, reject) => {
        if (words != null){
            const result = words.filter(words => words.length > 0);
            resolve(result.map(result => result.toLowerCase()))
        } else {
            reject(Error('Error: Array is empty!'))
        }
    })

lowerCaseWords(mixedArray)
    .then(resolve => console.log(resolve))
    .catch(reject => console.log(reject))

