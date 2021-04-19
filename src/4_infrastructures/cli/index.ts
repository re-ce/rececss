import StylesheetsController from "../../3_adapters/StylesheetsController";
import FileSystem from "../fs";
import IO from "../io";
import { CSSProcessor } from "../utils";

export default async function run() {
  const fs = FileSystem.new();
  const io = IO.new("rececss.config.js", fs);
  const cssProcessor = CSSProcessor.create(io.getCSSProccesorInput());
  const controller = StylesheetsController.create(io, cssProcessor);
  controller.generateAssets();
}
