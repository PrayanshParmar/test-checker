import express from "express";
import cors from "cors";
import { idGenerator } from "./lib/id.generator";
import { getAllFiles } from "./lib/getallfiles";
import simpleGit from "simple-git";
import path from "path";
import { uploadFiles } from "./lib/upload.file";

const app = express();

const PORT = 3000;

app.use(cors());
app.use(express.json());
