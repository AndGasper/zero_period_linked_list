// Vertices(V) = {v_1, ..., v_n}; v = vertex
// Edges (E) = {V x V = (v_i, v_j)); Set of ordered pairs made by V x V; Reflexive, transitive, symmetric
// Graph (G) => G(V,E) the set of vertices and edges
// So...that was a fancy way of saying a graph is just a series of points, the vertices, that are connected by lines known as edges;
/**
 * Represents an undirected graph
 * @constructor
 */

function Graph() {
    /**
     * this.vertices
     * @type {string | Object}
     */
    this.vertices = {}; // vertices object contains every vertex of the graph (G)
    /**
     * @type {{}}
     */
    this.edges = {}; // edges object contains every edge of the graph (G)

    /**
     *
     * @name this.CreateVertex
     * @param value
     * @param maxDegree
     * @returns {string|Object}
     * @constructor
     */
    this.CreateVertex = (value,maxDegree) => {
        let vertex = {
            vertexValue: value,
            degree: 0,
            maximumDegree: maxDegree
        };
        this.vertices[vertex.vertexValue] = vertex; // Use the value of the vertex to identify it in the vertices object;
        return this.vertices;
    };
    // Not sure how to have ordered pairs in JS, so for now, a single edge will contain all essential information, and the identifier key will be the natural ordered pair arrangement
    /**
     * @name this.CreateEdge
     * @param vertex1
     * @param vertex2
     * @constructor
     */
    /**
     *
     * @param vertex1
     * @param vertex2
     * @returns {{}}
     * @constructor
     */
    this.CreateEdge = (vertex1,vertex2) => {
        let orderedPair = `(${vertex1},${vertex2})`; //Formatted string to be able to refer to the pairs more naturally
        let edge = {
            v1: vertex1,
            v2: vertex2
        };
        this.edges[orderedPair] = edge;
    };
}
/**
 *
 * @constructor
 */
function DiGraph() {
    this.digraph = new Graph();
    this.vertices = this.digraph.vertices;
    this.path = {}; // path object contains start: vertex1 and end: vertex2 information
    /**
     *
     * @param value
     * @param maxDegree
     * @returns {string|Object}
     * @constructor
     */
    this.CreateVertex = (value,maxDegree) => {
        return this.digraph.CreateVertex(value,maxDegree); // Pulls CreateVertex inherited by digraph
    };
    /**
     *
     * @param vertex1
     * @param vertex2
     * @returns {{}|*}
     * @constructor
     */
    this.CreatePath = (vertex1, vertex2) => {
        let orderedPair = `(${vertex1},${vertex2})`;
        let path = {
            start: this.vertices[vertex1].vertexValue,
            end: this.vertices[vertex2].vertexValue
        };
        this.path[orderedPair] = path;
        // Increment the degree of the vertices (nodes) used by 1, i.e. increment
        ++this.vertices[vertex1].degree;
        ++this.vertices[vertex2].degree;
        return this.path;
    };
    /**
     *
     * @param startVertexOfPathToDelete
     * @param endVertexOfPathToDelete
     * @returns {{}|*}
     * @constructor
     */
    this.RemovePath = (startVertexOfPathToDelete, endVertexOfPathToDelete) => {

        let pathToRemove = `(${startVertexOfPathToDelete},${endVertexOfPathToDelete})`;
        delete this.path[pathToRemove];
        --this.vertices[startVertexOfPathToDelete].degree; // Decrement degree of affected node
        --this.vertices[endVertexOfPathToDelete].degree; // Decrement degree of affected node
        return this.path;
    };
    /**
     * @name this.InsertPath
     * @param vertex1
     * @param vertex2
     * @returns {{}|*}
     * @constructor
     */
    this.InsertPath = (vertex1, vertex2) => {
        let vertexToAdd = vertex1;
        let vertexToLinkTo = vertex2;
        // Check to see if you need to create the vertex, and check to see if the vertex you want to link to isn't full up
        if ( (this.vertices[vertexToAdd] === undefined) && (this.vertices[vertexToLinkTo].degree < this.vertices[vertexToLinkTo].maximumDegree) ) {
            this.CreateVertex(vertexToAdd,this.vertices[vertexToLinkTo].maximumDegree); // Use CreateVertex function to make the node you want to add; default the maximum degree of the new node to the maximum degree of the node it is being linked to;
            this.CreatePath(vertexToAdd, vertexToLinkTo);   // Use CreatePath function to link the two nodes; vTA -> vTLT
        }
        else if ((this.vertices[vertexToAdd] !== undefined) && (this.vertices[vertexToAdd].degree < this.vertices[vertexToAdd].maximumDegree) && (this.vertices[vertexToLinkTo].degree < this.vertices[vertexToLinkTo].maximumDegree)) {
            this.CreatePath(vertexToAdd,vertexToLinkTo); // Both nodes exist and both nodes are unsaturated
        }
        else if (this.vertices[vertexToLinkTo].degree === this.vertices[vertexToLinkTo].maximumDegree) {
            console.log("This node is saturated"); // Need to determine which paths already exist for the given node
            console.log("Nope.");
        }
        return this.path;
    }
}

function Tree() {
    this.tree = new Graph();
}

var graph = new Graph();
graph.CreateVertex(0,2);
graph.CreateVertex(1,2);
graph.CreateVertex(2,2);
console.log("graph",graph);
console.log("graph.vertices", graph.vertices);
graph.CreateEdge(0,1);
graph.CreateEdge(1,2);
console.log("graph", graph);
console.log("graph.edges", graph.edges);

var testDi = new DiGraph();
console.log("testDi",testDi);
testDi.CreateVertex(0,2);
testDi.CreateVertex(1,2);
testDi.CreateVertex(2,2);
console.log("testDi after CreateVertex", testDi); //this.digraph.vertices
testDi.CreatePath(0,1);
testDi.CreatePath(1,2);
console.log("testDi.Createpath", testDi);
console.log('testDi.Insertpath(3,0)',testDi.InsertPath(3,0));
console.log("testDi.vertices", testDi.vertices);
// Note: the degree parameter should probably also store the things that are connected to the vertex
// that way, I won't have to deal with the ordered pair syntax of my paths while still being able to
// manipulate the graph with relative ease




var testArray = [0,14,28,42,53,69,84,92,128,156,170,171]; // Pre sorted
var sapling = new Tree();
console.log("sapling",sapling);
