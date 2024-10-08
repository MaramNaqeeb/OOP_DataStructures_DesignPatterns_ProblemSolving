/**
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function (edges) {
    // here I compare the first element of the first array (first vertex) with the other arrays (vertices)
    if (edges[0][0] == edges[1][0] || edges[0][0] == edges[1][1]) {
        // I return the first element of the first array if one of the above conditions is met
        return edges[0][0]
    }
        // I return the second element of the first array if none of the above conditions is met
    return edges[0][1]
}
console.log(findCenter([[1,2],[2,3],[4,2]]))