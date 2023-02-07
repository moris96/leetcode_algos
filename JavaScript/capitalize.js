function capitalizeTitle(title) {
    const capital = title.toLowerCase().split(" ")
    for(let i in capital){
        capital[i] = capital[i][0].charAt(0).toUpperCase() + capital[i].substring(1)
    }
    return capital.join(" ")
}

console.log(capitalizeTitle("i lOve leetcode"))
