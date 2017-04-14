// Vertices(V) = {v_1, ..., v_n}; v = vertex
// Edges (E) = {V x V = (v_i, v_j)); Set of ordered pairs made by V x V; Reflexive, transitive, symmetric
// Graph (G) => G(V,E) the set of vertices and edges
// So...that was a fancy way of saying a graph is just a series of points, the vertices, that are connected by lines known as edges;
function Graph() {
    this.vertices = {}; // vertices object contains every vertex of the graph (G)
    this.edges = {}; // edges object contains every edge of the graph (G)
    this.CreateVertex = (value) => {
        let vertex = {
            vertexValue: value
        };
        this.vertices[vertex.vertexValue] = vertex; // Use the value of the vertex to identify it in the vertices object;
        return this.vertices;
    };
    // Not sure how to have ordered pairs in JS, so for now, a single edge will contain all essential information, and the identifier key will be the natural ordered pair arrangement
    this.CreateEdge = (vertex1,vertex2) => {
        let orderedPair = "("+vertex1+", "+vertex2+")"; //Formatted string to be able to refer to the pairs more naturally
        let edge = {
            v1: vertex1,
            v2: vertex2
        };
        this.edges[orderedPair] = edge;
    };
}

function DiGraph() {
    this.digraph = new Graph();
    this.vertices = this.digraph.vertices;
    this.path = {}; // path object contains start: vertex1 and end: vertex2 information
    this.CreateVertex = (value) => {
        return this.digraph.CreateVertex(value); // Pulls CreateVertex inherited by digraph
    };

    this.CreatePath = (vertex1, vertex2) => {
        let orderedPair = "("+vertex1+", "+vertex2+")";
        let path = {
            start: this.vertices[vertex1].vertexValue,
            end: this.vertices[vertex2].vertexValue
        };
        this.path[orderedPair] = path;
        return this.path;
    };
    this.RemovePath = (orderedPair) => {
        let oP = orderedPair.toString();
        delete this.path[oP];
        return this.path;
    };
    this.InsertPath = (vertex1, vertex2) => {
        let vertexToAdd = vertex1;
        let vertexToLinkTo = vertex2;
        if (this.vertices[vertexToAdd] === undefined) {
            this.CreateVertex(vertexToAdd);
            this.CreatePath(vertexToAdd, vertexToLinkTo);
        }
        return this.path;
    }
}

var graph = new Graph();
graph.CreateVertex(0);
graph.CreateVertex(1);
graph.CreateVertex(2);
console.log("graph",graph);
console.log("graph.vertices", graph.vertices);
graph.CreateEdge(0,1);
graph.CreateEdge(1,2);
console.log("graph", graph);
console.log("graph.edges", graph.edges);

var testDi = new DiGraph();
console.log("testDi",testDi);
testDi.CreateVertex(0);
testDi.CreateVertex(1);
testDi.CreateVertex(2);
console.log("testDi after CreateVertex", testDi); //this.digraph.vertices
testDi.CreatePath(0,1);
testDi.CreatePath(1,2);
console.log("testDi.Createpath", testDi);
console.log('testDi.Insertpath(3,0)',testDi.InsertPath(3,0));


