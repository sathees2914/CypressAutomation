// const { defineConfig } = require("cypress");

// module.exports = defineConfig({
//   e2e: {
//     setupNodeEvents(on, config) {
//       // implement node event listeners here
//     },
//   },
// });

// cypress.config.js
const { defineConfig } = require("cypress");
const fs = require("fs");
const path = require("path");
const XLSX = require("xlsx");
const deepEqual = require("deep-equal");

function normalizeData(data) {
  return data.map((row) =>
    row.map((cell) => (typeof cell === "string" ? cell.trim() : cell))
  );
}

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on("task", {
        compareExcelSheets({ filePath, sheet1Name, sheet2Name }) {
          const fullPath = path.resolve(filePath);
          const data = fs.readFileSync(fullPath);
          const workbook = XLSX.read(data, { type: "buffer" });

          let sheet1 = XLSX.utils.sheet_to_json(workbook.Sheets[sheet1Name], {
            header: 1,
          });
          let sheet2 = XLSX.utils.sheet_to_json(workbook.Sheets[sheet2Name], {
            header: 1,
          });
          console.log("Original Sheet 1 Data:", sheet1);
          console.log("Original Sheet 2 Data:", sheet2);

          // Normalize the data
          sheet1 = normalizeData(sheet1);
          sheet2 = normalizeData(sheet2);

          console.log("Normalized Sheet 1 Data:", sheet1);
          console.log("Normalized Sheet 2 Data:", sheet2);

          const areEqual = deepEqual(sheet1, sheet2);

          console.log("Sheets are equal:", areEqual);

          return areEqual;
        },
      });
    },
  },
});
