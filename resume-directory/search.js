import { liteClient as algoliasearch } from "algoliasearch/lite";
import instantsearch from "instantsearch.js";
import { searchBox, hits } from "instantsearch.js/es/widgets";

const searchClient = algoliasearch(
  "82VLS1TU5K",
  "bfdc9eff848b16b6167efaa4a84d5e27"
);

const search = instantsearch({
  indexName: "front_end_dev_pages",
  searchClient,
});

search.addWidgets([
  searchBox({
    container: "#searchbox",
  }),

  hits({
    container: "#hits",
  }),
]);

search.start();

/*
// Get the container by its ID
const container = document.getElementById("searchbox");
// Example: Change the background color of the container
container.style.backgroundColor = "lightblue";
// Example: Add content to the container
container.innerHTML += "<p>JavaScript added this paragraph!</p>";
*/
