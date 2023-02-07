function countVowelSubstrings(word){
    let count = 0
    const vowels = ['a','e','i','o','u']
    // const vowels = ['a','e','i','o','u','A','E','I','O','U']
    for(let letter of word){
        if(vowels.includes(letter)){
            count++
        }
    }
    return count 
}

console.log(countVowelSubstrings("adefgh"))

