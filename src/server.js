import fs from "fs";
import path from "path";
import OpenAI from "openai";
import express from "express";
import cors from "cors";
//import bodyParser from "body-parser";

const openai = new OpenAI({
    organization: "org-SfzIm9D1c1Y4AAmdWvUpGbsS",
    project: "proj_MBIUINyDcYCj1UYGDVtiB2Er"
});

const speechFile = path.resolve("./speech.mp3");

const app = express();
const port = 8000;

app.use(express.urlencoded());
app.use(express.json());

app.use((req, res, next) => {
  res.append('Access-Control-Allow-Origin', ['*']);
  res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.append('Access-Control-Allow-Headers', ['*']);
  res.append('bypass-tunnel-reminder',["*"]);
  next();
});

app.use(cors())

app.post('/createAudio', async (req, res) => {

        console.log('>>> req === ====================================', req.body)
        const mp3 = await openai.audio.speech.create({
          model: "tts-1",
          voice: "alloy",//JSON.stringify(req.body ? req.body.voiceType : "alloy"),
          input: JSON.stringify(req.body ? req.body.text : "no text received"),
          
        });
        console.log(speechFile);
        const arrBuffer = await mp3.arrayBuffer()
        const buffer = Buffer.from(arrBuffer);
        await fs.promises.writeFile(speechFile, buffer);
        res.sendFile(speechFile);
});

app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.get('/speech.mp3', (req, res) => {
  res.send('speech.mp3');
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});