"use strict";
import { input } from "@inquirer/prompts";
import qr from "qr-image";

const userInput = await input({ message: "Enter a text to generate qr-code" });
const userInputToFileName =
  userInput.toLocaleLowerCase().split(" ").join("_") + ".svg";
