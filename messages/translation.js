const {Translate} = require('@google-cloud/translate').v2;
const fs = require('fs');

// Instancie o cliente de tradução
const translate = new Translate({ key: 'AIzaSyBqLyEwIUOeCV2NgRq8hkqc2h31QQfRdvc' });

// Função recursiva para iterar e traduzir as strings em objetos
async function translateObject(obj, srcLang, targetLang) {
  const translatedObj = {};

  for (const key in obj) {
    if (typeof obj[key] === 'object') {
      // Se o valor for outro objeto, faça uma chamada recursiva
      translatedObj[key] = await translateObject(obj[key], srcLang, targetLang);
    } else if (typeof obj[key] === 'string') {
      // Traduzir strings
      const [translated] = await translate.translate(obj[key], { from: srcLang, to: targetLang });
      translatedObj[key] = translated;
    } else {
      // Se não for string ou objeto, mantenha o valor original
      translatedObj[key] = obj[key];
    }
  }

  return translatedObj;
}

// Função para ler e traduzir o arquivo
async function translateFile(srcLang, targetLang, filePath) {
  try {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    
    // Traduzir o conteúdo recursivamente
    const translatedData = await translateObject(data, srcLang, targetLang);

    // Salvar o arquivo traduzido
    const newFilePath = filePath.replace(srcLang, targetLang);
    fs.writeFileSync(newFilePath, JSON.stringify(translatedData, null, 2));
    console.log(`Arquivo traduzido salvo em: ${newFilePath}`);
  } catch (error) {
    console.error(`Erro ao traduzir o arquivo ${filePath}:`, error);
  }
}

// Traduzir múltiplos arquivos
const files = ['fi.json', 'el.json', 'pl.json', 'he.json', 'id.json', 'th.json', 'hu.json', 'cs.json', 'ro.json', 'uk.json', 'vi.json', 'bn.json'] 
files.forEach(file => {
    const lang = file.replace('.json', '');
    translateFile('en', lang, `./messages/${file}`)
});
