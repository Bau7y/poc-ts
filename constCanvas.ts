const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement;
const myCanvas2 = <HTMLCanvasElement>document.getElementById("main_canvas");


declare function handleRequest(url: string, method: "GET" | "POST"): void;
const req = { url: "example.org", method: "GET" };
handleRequest(req.url, req.method as "GET");

