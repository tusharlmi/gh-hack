import fs from "fs";
import path from "path";
import OpenAI from "openai";
import express from "express";

const openai = new OpenAI({
    organization: "YOUR_ORG_ID",
    project: "$PROJECT_ID"
});

const speechFile = path.resolve("./speech.mp3");

const app = express();
const port = 8000;

app.post('/createAudio', async (req, res) => {
        const mp3 = await openai.audio.speech.create({
          model: "tts-1",
          voice: "alloy",
          input: req.text || "no text received",
          
        });
        console.log(speechFile);
        const buffer = Buffer.from(await mp3.arrayBuffer());
        await fs.promises.writeFile(speechFile, buffer);
        res.send(speechFile);
});

app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});