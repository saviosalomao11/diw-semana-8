const catalogo = [
  { id: 1, titulo: "Interestelar",             tipo: "filme", ano: 2014, generos: ["ficção científica", "drama", "aventura"], nota: 9.5, assistido: true  },
  { id: 2, titulo: "Breaking Bad",             tipo: "serie", ano: 2008, generos: ["drama", "crime", "thriller"],             nota: 9.8, assistido: true  },
  { id: 3, titulo: "Parasita",                 tipo: "filme", ano: 2019, generos: ["thriller", "drama"],                      nota: 9.2, assistido: false },
  { id: 4, titulo: "Stranger Things",          tipo: "serie", ano: 2016, generos: ["terror", "ficção científica"],            nota: 8.7, assistido: true  },
  { id: 5, titulo: "Clube da Luta",            tipo: "filme", ano: 1999, generos: ["drama", "thriller"],                      nota: 8.9, assistido: true  },
  { id: 6, titulo: "O Silêncio dos Inocentes", tipo: "filme", ano: 1991, generos: ["thriller", "crime"],                      nota: 8.6, assistido: false },
  { id: 7, titulo: "Chernobyl",                tipo: "serie", ano: 2019, generos: ["drama", "história"],                      nota: 9.3, assistido: false },
  { id: 8, titulo: "Matrix",                   tipo: "filme", ano: 1999, generos: ["ação", "ficção científica"],              nota: 8.8, assistido: true  }
];

console.log(catalogo);
console.log("Primeiro título:", catalogo[0].titulo);
console.log("Ano do último:", catalogo[catalogo.length - 1].ano);

if (catalogo[2].generos.length >= 2) {
  console.log("2º gênero do 3º item:", catalogo[2].generos[1]);
} else {
  console.log("O 3º item tem apenas um gênero, não existe o segundo.");
}

catalogo.forEach(item => console.log(`- [${item.tipo}] ${item.titulo} (${item.ano})`));

const titulosEmCaixaAlta = catalogo.map(item => item.titulo.toUpperCase());
console.log("Títulos em caixa alta:", titulosEmCaixaAlta);

const naoAssistidos = catalogo.filter(item => !item.assistido);
console.log("Quantidade não assistidos:", naoAssistidos.length);
naoAssistidos.forEach(item => console.log(" ·", item.titulo));

const notaAlta = catalogo.find(item => item.nota >= 9);
if (notaAlta) {
  console.log(`Primeiro com nota >= 9: ${notaAlta.titulo} — nota ${notaAlta.nota}`);
} else {
  console.log("Nenhum item com nota >= 9.");
}

const somaGeral = catalogo.reduce((acc, item) => acc + item.nota, 0);
const mediaGeral = somaGeral / catalogo.length;

const assistidos = catalogo.filter(item => item.assistido);
const somaAssistidos = assistidos.reduce((acc, item) => acc + item.nota, 0);
const mediaAssistidos = somaAssistidos / assistidos.length;

console.log("Média geral:", mediaGeral.toFixed(2));
console.log("Média dos assistidos:", mediaAssistidos.toFixed(2));

console.log("Algum antes de 2000?", catalogo.some(item => item.ano < 2000));
console.log("Todos têm pelo menos 1 gênero?", catalogo.every(item => item.generos.length >= 1));

const totalFilmes = catalogo.filter(i => i.tipo === "filme").length;
const totalSeries = catalogo.filter(i => i.tipo === "serie").length;
const top3 = [...catalogo].sort((a, b) => b.nota - a.nota).slice(0, 3);

document.getElementById("output").innerHTML =
  "<h2>Resumo</h2>" +
  `<p>Total: ${catalogo.length} itens</p>` +
  `<p>Filmes: ${totalFilmes} | Séries: ${totalSeries}</p>` +
  `<p>Não assistidos: ${naoAssistidos.length}</p>` +
  `<p>Média geral: ${mediaGeral.toFixed(2)}</p>` +
  "<h2>Top 3 Notas</h2><ul>" +
  top3.map(item => `<li>${item.titulo} — ${item.nota}</li>`).join("") +
  "</ul>";