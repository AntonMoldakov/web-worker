# web-worker

If we click on the "Calculate sum" button, then during its calculation the entire main thread is blocked,
and the "Change background" button does not work.

But if we on the "Calculate sum in Web Worker" button, we will see that main thread isn't blocked,
and the "Change background" button works fun. This is because all the calculation is in the web worker in a different thread.
