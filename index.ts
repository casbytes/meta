import slugify from "slugify";
import path from "node:path";
import fs from "node:fs";
import { frontEndDevelopment } from "./courses/front-end-development";

const courses = [
  {
    data: frontEndDevelopment,
    fileName: slugify(frontEndDevelopment.title) + ".json",
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
  const outputPath = path.join(outputFolder, fileName);
  fs.writeFileSync(outputPath, JSON.stringify(data, null, 2));
  console.info(`File written to ${outputPath}`);
});
