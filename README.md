# Bundling D3 v4 using rollup

I’m playing with using rollup to bundle the relevant parts of D3 v4 with my code.

I ran into a snag where my selections don’t have a `.transition()` method.

Is it intended to be possible to bundle D3 applications in this way?
If so, how can this be made to work?
If not, how ought one to do it?

## Sample code
In this repository, the file `standalone.html` includes D3 and the app code separately,
and works as expected.

The file `bundled.html` includes a bundle generated using rollup,
and fails with:

    circle.js:24 Uncaught TypeError: circle.transition is not a function
