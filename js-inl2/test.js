const RESULTS = [{
    "id": 1,
    "title": "Cannibal! The Musical (a.k.a. Alferd Packer: The Musical)",
    "description": "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.",
    "image": "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui."
}, {
    "id": 2,
    "title": "Story of a Love Affair (Cronaca di un amore)",
    "description": "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
    "image": "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem."
}, {
    "id": 3,
    "title": "Jumper",
    "description": "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
    "image": "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis."
}];

function findResult(query) {

    const search = () => RESULTS.filter(
        item => item.title.toLowerCase().includes(query.toLowerCase() || item.description.toLowerCase().includes(query.toLowerCase))
    );
/*
    const userInput = "Jumper";
    const obj = RESULTS.find(item => item.title === userInput);

    query = console.log(obj);
    console.log("You searched for: ", userInput, "But this function is not implemented.");
    return query;
    */
}