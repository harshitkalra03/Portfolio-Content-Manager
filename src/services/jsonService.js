const fs = require("fs");
const path = require("path");

function readJson(filePath) {

    try {

        const data = fs.readFileSync(filePath, "utf8");

        return JSON.parse(data);

    } catch (error) {

        console.error(`Failed to read ${filePath}`, error);

        return null;
    }
}

function writeJson(filePath, data) {

    try {

        fs.writeFileSync(
            filePath,
            JSON.stringify(data, null, 4),
            "utf8"
        );

        return true;

    } catch (error) {

        console.error(`Failed to write ${filePath}`, error);

        return false;
    }
}

module.exports = {
    readJson,
    writeJson
};