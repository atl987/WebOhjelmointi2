// Luo REST API sanakirjaa varten.

// Sanakirjassa (tieto tiedostossa - esim. sanakirja.txt) on taulukossa eri riveillä sana suomeksi ja englanniksi;

// esim.

// auto car
// talo house

// Tarvitset API:a varten luoda hakua varten metodin (toteuta GET metodi) sekä sanojen lisäystä varten metodin (toteuta POST metodi).

// Tiedonhaussa parametrina on suomenkielinen sana. Haku palauttaa englannin kielisen sanan vastineen.

// Tiedonlisäyksessä tallennetaan suomenkielinen sana ja vastaava englanninkielinen sana uudelle riville (tekstitiedostoa kasvatetaan uudella rivillä)

// Tiedoston käsittelyä varten tarvitset fs moduulin. Fs on nykyään sisäänrakennettu node.js:ään (ei tarvitse asentaa erikseen).

// Em. moduulista löytyy esim. metodi writeFileSync kirjoitusta varten ja readFileSync lukemista varten.

// (Tiedoston käsittely voi olla synkroninen tai asynkroninen  - saa valita).

//     Talleta toteutuksesi github -ympäristöön omaan projektiisi esim. hakemistoon: REST1
//     Kirjoita tehtävästä kommentointi ja huomioita kehittäjän blogiin (hackmd.io).
import express from "express";
const port = 3000;
const app = express();
import fs from "fs";

app.get("/:sana", (req, res) => {
  const word: string = req.params.sana;
  const response = getWord(word);
  res.send(response);
});

app.post("/:finnish/:english", (req, res) => {
  const fin = req.params.finnish;
  const eng = req.params.english;
  try {
    setWord(fin, eng);
    res.send("ok");
  } catch (err) {
    res.send("error");
    console.log(err.message);
  }
});

function getWord(word: string): string {
  const path = "./sanakirja.txt";
  const content = fs.readFileSync(path, "utf-8");
  const asLines = content.split(/\r?\n/);
  for (let i = 0; i < asLines.length; i++) {
    const splitWord = asLines[i].split(" ");
    if (splitWord[0] === word) {
      return splitWord[1];
    }
  }
  return "";
}
function setWord(finnish: string, english: string): void {
  const path = "sanakirja.txt";
  const content = fs.readFileSync(path, "utf-8");
  const line = finnish + " " + english;
  fs.writeFileSync("./sanakirja.txt", content + "\n" + line);
}
app.listen(port, async () => {
  console.log(`listening on port ${port}`);
  console.log(getWord("talo"));
  setWord("puu", "tree");
});
