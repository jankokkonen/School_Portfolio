/*const body1 = document.getElementsByTagName("body")[0];
const div1 = document.createElement("div");
body1.appendChild(div1);
div1.setAttribute("id", "div1");

const para = document.createElement("p");
para.setAttribute("id", "p1");
const node = document.createTextNode("Tekstiä");
para.appendChild(node);

const para2 = document.createElement("p");
para2.setAttribute("id", "p2");
const node2 = document.createTextNode("lisää tekstiä")
para2.appendChild(node2);

const para3 = document.createElement("p");
para3.setAttribute("id", "p3");
const node3 = document.createTextNode("vielä kerran lisää tekstiä")
para3.appendChild(node3);

const element = document.getElementById("div1");
element.appendChild(para);
element.appendChild(para2);
element.appendChild(para3);*/

const body1 = document.getElementsByTagName("body")[0];

//Header
const header = document.createElement("header");
const otsikko = document.createElement("h1");
const para = document.createElement("p");

body1.appendChild(header);
header.appendChild(otsikko);
header.appendChild(para);

header.setAttribute("class", "ylatunniste");

const nodeOtsikko = document.createTextNode("Tämä on artikkelin otsikko");
otsikko.appendChild(nodeOtsikko);

const nodePara = document.createTextNode("Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam aliquid est quaerat maxime aspernatur aut atque, explicabo optio consequatur reprehenderit natus eligendi, iste a necessitatibus, eveniet possimus quasi maiores sit provident distinctio? Atque reiciendis deleniti inventore, recusandae quos aliquam officiis labore itaque molestias vero aspernatur veritatis, nemo hic ducimus quod?");
para.appendChild(nodePara);


//section
const section = document.createElement("section");
const para2 = document.createElement("p");
const figure = document.createElement("figure");
const img = document.createElement("img");

img.setAttribute("src", "./images/js_machine.gif");

body1.appendChild(section);
section.appendChild(para2);
section.appendChild(figure);
figure.appendChild(img);


section.setAttribute("id", "rinnakkain");
figure.setAttribute("id", "kuvanpaikka");

const nodePara2 = document.createTextNode("Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est consectetur itaque excepturi accusantium, enim nulla sit, voluptatum, ipsum praesentium officia aperiam! Unde, non! Saepe cupiditate repellat deserunt sit ab! Non inventore fugit placeat modi animi, nisi ea pariatur est eveniet voluptas nemo obcaecati eum vel cum eligendi sit dolorem voluptate odit. Sunt exercitationem ea voluptatibus libero, suscipit accusamus. Harum consequatur impedit dicta ducimus eos odio a soluta laudantium fuga non tenetur, iure doloribus molestias saepe.");
para2.appendChild(nodePara2);

//footer
const footer = document.createElement("footer");
const para3 = document.createElement("p");

body1.appendChild(footer);
footer.appendChild(para3);

const nodePara3 = document.createTextNode("@ 2022 Jan Kokkonen");
para3.appendChild(nodePara3);

