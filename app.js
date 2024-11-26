"use strict";
import { input } from "@inquirer/prompts";
import qr from "qr-image";
import fs from "node:fs";
const userInput = await input({ message: "Enter a text to generate qr-code" });
const userInputToFileName =
  userInput.toLocaleLowerCase().split(" ").join("_") + ".svg";

const qr_svg = qr.image(userInput, {
  type: "svg",
});

qr_svg.pipe(fs.createWriteStream(userInputToFileName));

const svg_string = qr.imageSync(userInput, { type: "svg" });
