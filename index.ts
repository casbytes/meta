import slugify from "slugify";
import path from "node:path";
import fs from "node:fs";
import { frontEndDevelopment } from "./courses/front-end-development";
import { frontEndDevelopmentCopy } from "./courses/front-end-development-copy";

const courses = [
  {
    data: frontEndDevelopment,
    fileName: slugify(frontEndDevelopment.title) + ".json",
  },
  {
    data: frontEndDevelopmentCopy,
    fileName: slugify(frontEndDevelopmentCopy.title) + ".json",
  },
];

const outputFolder = path.join(process.cwd(), "build");
if (!fs.existsSync(outputFolder)) {
  fs.mkdirSync(outputFolder);
} else {
  fs.rmSync(outputFolder, { recursive: true });
  fs.mkdirSync(outputFolder);
}

courses.forEach(({ data, fileName }) => {
  console.log(fileName); // Check the output of slugify for each course title
  const outputPath = path.join(outputFolder, fileName);
  fs.writeFileSync(outputPath, JSON.stringify(data, null, 2));
  console.info(`File written to ${outputPath}`);
});
