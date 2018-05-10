function graph(k, max_distance){

form_info = document.getElementById("form1");
var form_info;
var source=Number(form_info.elements["source"].value);
var target=Number(form_info.elements["target"].value);

var paths =[[source]];
var k_shortest =[];

for (j=1;j<max_distance;j++){

	if (k_shortest.length < k){
		for (i=0; i<paths.length;i++){
		paths_slice = paths[i].slice(0,-1);
			if (paths[i].length == j && !paths_slice.includes(paths[i][paths[i].length-1])) {
				var adj = G.neighbors(paths[i][paths[i].length-1]);
				for (n=0;n<adj.length;n++){
					paths.push(paths[i].concat(adj[n]));
					if (paths[paths.length-1][paths[i].length]==target && !paths_slice.includes(adj[n]) && k_shortest.length < k){
						k_shortest.push(paths[paths.length-1]);
					}
				}
			}
		}
	}
}

console.log(k_shortest);

}