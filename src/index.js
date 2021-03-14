module.exports = function reverse (n) {
    if (n < 0) {
        n*= -1
    }
    return (parseFloat(n.toString().split('').reverse().join('')))
}
