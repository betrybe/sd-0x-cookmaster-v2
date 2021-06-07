const { promisify } = require('util');
const { readFile } = require("fs").promises;
const { resolve } = require("path");

const exec = promisify(require('child_process').exec);

let testResults;

beforeAll(async () =>{
  await exec(`npm run dev:test:coverage &> /dev/null`);
  
  const path = resolve("coverage", "coverage-summary.json");
  
  const pct = await readFile(path, "utf-8")
    .then((coverageTxt) => JSON.parse(coverageTxt))
    .then(
      ({
        total: {
          lines: { pct },
        },
      }) => isNaN(pct) ? 0 : Number(pct)
    )
    .catch(() => 0);

  testResults = {
    path,
    pct,
  };
});

describe
  .each([
    [11,30], 
    [13,60],
    [14,90]
  ])
  (
    '%p - Crie testes de integração que cubram no mínimo %p\% dos arquivos em `src`', 
    (_testId, percentage) => {
      it(
        'Será validado que o teste cobre o valor esperado',
        async () =>{
          expect(testResults.pct).toBeGreaterThanOrEqual(percentage);
        }
      )
    }
  );
