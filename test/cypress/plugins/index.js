// cypress/plugins/index.js
const fs = require("fs");
const path = require("path");
const XLSX = require("xlsx");

module.exports = (on, config) => {
  on("task", {
    compareExcelSheets({ filePath, sheet1Name, sheet2Name }) {
      const fullPath = path.resolve(filePath);
      const data = fs.readFileSync(fullPath);
      const workbook = XLSX.read(data, { type: "buffer" });

      const sheet1 = XLSX.utils.sheet_to_json(workbook.Sheets[sheet1Name], {
        header: 1,
      });
      const sheet2 = XLSX.utils.sheet_to_json(workbook.Sheets[sheet2Name], {
        header: 1,
      });

      return deepEqual(sheet1, sheet2);
    },
  });
};
